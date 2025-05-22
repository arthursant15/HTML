// Inicializa o SDK da Deezer
DZ.init({
  appId: '619217', // App ID de testes (público)
  channelUrl: 'http://127.0.0.1:5500/channel.html', // caminho do seu channel.html
  player: {
    container: 'dz-player',
    width: 300,
    height: 80,
    onload: function () {
      console.log("Player carregado");
    }
  }
});

// Login com Deezer
function loginDeezer() {
  DZ.login(function (response) {
    if (response.authResponse) {
      console.log('Login bem-sucedido', response);
      alert('Login feito com sucesso!');
    } else {
      console.log('Falha no login');
    }
  }, { perms: 'basic_access,email' });
}

// Busca de músicas usando a API
function searchMusic() {
  const query = document.querySelector('.searchInput').value;
  if (!query) return alert('Digite algo para buscar.');

  DZ.api(`/search?q=${encodeURIComponent(query)}`, function (response) {
    if (response.data && response.data.length > 0) {
      const track = response.data[0];
      console.log('Música encontrada:', track);

      DZ.player.playTracks([track.id]); // toca a primeira música da busca
    } else {
      alert('Nenhum resultado encontrado.');
    }
  });
}
