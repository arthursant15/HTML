const playlist = [];

function searchMusic() {
  const query = document.getElementById("searchInput").value;
  fetch(`https://api.deezer.com/search?q=${query}&output=jsonp&limit=5`, {
    method: "GET",
    mode: "no-cors"
  })
  .then(response => {
    const script = document.createElement("script");
    script.src = `https://api.deezer.com/search?q=${query}&output=jsonp&limit=5&callback=showResults`;
    document.body.appendChild(script);
  });
}

function showResults(data) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  data.data.forEach(track => {
    const trackDiv = document.createElement("div");
    trackDiv.innerHTML = `
      <strong>${track.title}</strong> - ${track.artist.name}<br>
      <button onclick='addToPlaylist(${JSON.stringify(track)})'>Adicionar</button>
      <audio controls src="${track.preview}"></audio>
    `;
    resultsDiv.appendChild(trackDiv);
  });
}

function addToPlaylist(track) {
  playlist.push(track);
  updatePlaylist();
}

function updatePlaylist() {
  const playlistUl = document.getElementById("playlist");
  playlistUl.innerHTML = "";
  playlist.forEach(track => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${track.title} - ${track.artist.name}
      <audio controls src="${track.preview}"></audio>
    `;
    playlistUl.appendChild(li);
  });
}
