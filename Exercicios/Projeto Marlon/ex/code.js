const clientId = 'SUA_CLIENT_ID'; // Substitua pelo seu Client ID
const redirectUri = 'http://localhost:5500';
let accessToken = null;
let userId = null;
let currentPlaylistId = null;

// Ao abrir a página, checa o token
window.onload = () => {
  const hash = window.location.hash;
  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    accessToken = params.get("access_token");
    document.getElementById("app").style.display = "block";
    getUserId();
  }
};

function login() {
  const scopes = 'playlist-modify-public playlist-modify-private';
  window.location.href =
    `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes}`;
}

function getUserId() {
  fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then(res => res.json())
    .then(data => {
      userId = data.id;
    });
}

function createPlaylist() {
  const name = document.getElementById("playlistName").value;
  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, public: false })
  })
    .then(res => res.json())
    .then(data => {
      alert("Playlist criada!");
      currentPlaylistId = data.id;
    });
}

function searchTracks() {
  const query = document.getElementById("trackSearch").value;
  fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
    headers: { Authorization: "Bearer " + accessToken }
  })
    .then(res => res.json())
    .then(data => {
      const results = document.getElementById("results");
      results.innerHTML = '';
      data.tracks.items.forEach(track => {
        const li = document.createElement('li');
        li.innerHTML = `${track.name} - ${track.artists[0].name} <button onclick="addToPlaylist('${track.uri}')">Adicionar</button>`;
        results.appendChild(li);
      });
    });
}

function addToPlaylist(trackUri) {
  if (!currentPlaylistId) {
    return alert("Crie uma playlist primeiro!");
  }

  fetch(`https://api.spotify.com/v1/playlists/${currentPlaylistId}/tracks`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ uris: [trackUri] })
  }).then(() => alert("Música adicionada à playlist!"));
}
