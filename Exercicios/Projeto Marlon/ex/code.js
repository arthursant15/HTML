const client_id = '91a360c7d9434894b0f1ddcc03d5f86e';
const redirect_uri = 'http://localhost:5500'; // Altere se necessário
const scopes = 'playlist-modify-public playlist-read-private playlist-modify-private';

let accessToken = '';
let selectedTracks = [];
let userId = '';

document.getElementById('loginBtn').addEventListener('click', () => {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`;
  window.location.href = authUrl;
});

window.onload = () => {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1).split('&').reduce((acc, curr) => {
      const [key, value] = curr.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});

    accessToken = hash.access_token;
    if (accessToken) {
      document.getElementById('loginBtn').style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      fetchUserId();
    }
  }
};

function fetchUserId() {
  fetch('https://api.spotify.com/v1/me', {
    headers: { Authorization: 'Bearer ' + accessToken }
  })
    .then(res => res.json())
    .then(data => userId = data.id);
}

function searchTracks() {
  const query = document.getElementById('searchInput').value;
  fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
    headers: { Authorization: 'Bearer ' + accessToken }
  })
    .then(res => res.json())
    .then(data => {
      const results = document.getElementById('results');
      results.innerHTML = '';
      selectedTracks = [];

      data.tracks.items.forEach(track => {
        const trackDiv = document.createElement('div');
        trackDiv.className = 'p-2 bg-gray-800 my-2 rounded flex justify-between items-center';
        trackDiv.innerHTML = `
          <span>${track.name} - ${track.artists[0].name}</span>
          <button class="bg-green-500 px-2 py-1 rounded" onclick="selectTrack('${track.uri}')">Selecionar</button>
        `;
        results.appendChild(trackDiv);
      });
    });
}

function selectTrack(uri) {
  if (!selectedTracks.includes(uri)) {
    selectedTracks.push(uri);
    alert('Música adicionada à playlist!');
  }
}

function createPlaylist() {
  const name = document.getElementById('playlistName').value;
  if (!name || selectedTracks.length === 0) {
    alert('Preencha o nome da playlist e selecione músicas.');
    return;
  }

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, public: false })
  })
    .then(res => res.json())
    .then(playlist => {
      addTracksToPlaylist(playlist.id);
    });
}

function addTracksToPlaylist(playlistId) {
  fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ uris: selectedTracks })
  }).then(() => {
    alert('Playlist criada com sucesso!');
    document.getElementById('playlistName').value = '';
    document.getElementById('results').innerHTML = '';
    selectedTracks = [];
  });
}
