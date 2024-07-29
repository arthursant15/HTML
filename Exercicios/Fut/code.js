function mudar(){
    var pesq = document.getElementById('pes').value
    var imag = document.getElementById('foto')
    var resp = document.getElementById('resp')
    var txt1  = document.getElementById('titulo') 
    var txt2 = document.getElementById('head')
    if (pesq === ('Ibrahimovic') || pesq === ("Ibra") ){
        imag.src = 'ibraiW.jpg'
        resp.innerHTML = 'Zlatan Ibrahimović é um ex-futebolista sueco de ascendência bósnia e croata que atuava como centroavante. É amplamente considerado o maior jogador sueco da história do futebol.'
        txt1.innerText = 'Zlatan Ibrahimović'
        txt2.innerText = ''
        document.body.style.background = "url('IbraClub.jpg') center center / cover"
        txt1.style.color = 'black'
        resp.style.backgroundColor = "#a20304"
        txt1.style.backgroundColor = "#ce0303"
        txt1.style.width = '500px'
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
        resp.style.opacity = "0.8"
    }else if (pesq === ('Joe Hart') || pesq === ("Hart")){
        imag.src = 'JHW.png'
        resp.innerHTML = 'Joe Hart é um goleiro inglês que teve uma carreira significativa no futebol profissional. Nascido em 19 de abril de 1987, ele é conhecido por suas performances notáveis no gol e por representar clubes de prestígio, bem como a seleção nacional da Inglaterra.'
        document.body.style.background = "url('JHCLUB.jpg') center center / cover"
        resp.style.backgroundColor = "#3d9637"
        txt1.innerHTML = "Joe Hart"
        txt1.style.backgroundColor = "#186611"
        txt1.style.width = "400px"
        txt1.style.opacity = "0.9"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt2.innerHTML = ''
        resp.style.opacity = "0.9"
    }else if (pesq === ('Thomas Müller') || pesq === ('Muller')){
        imag.src = 'MullerW.jpg'
        resp.innerHTML = 'Thomas Müller é um jogador de futebol alemão conhecido por sua versatilidade, inteligência tática e habilidade técnica. Ele nasceu em 13 de setembro de 1989 em Weilheim in Oberbayern, Alemanha.'
        document.body.style.background = "url('MullerClub.jpeg') center center/ cover"
        txt1.innerHTML = "Thomas Müller"
        txt1.style.backgroundColor = "#00092d"
        txt1.style.width = "400px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#031a57"
        imag.style.opacity = "0.7"
        
    }else if (pesq === ("Neymar") || pesq === ("Menino Ney") || pesq === ("menino ney")  ){
        imag.src = 'NeymarW.webp'
        resp.innerHTML = "Neymar Jr., cujo nome completo é Neymar da Silva Santos Júnior, é um dos jogadores de futebol mais reconhecidos e talentosos do mundo. Ele nasceu em 5 de fevereiro de 1992 em Mogi das Cruzes, São Paulo, Brasil."
        document.body.style.background =  "url('NeymarClub.jpg') center center / cover"
        txt1.innerHTML = "Neymar da Silva Santos Júnior"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#5c1325"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#00092d"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.8"
    }else if (pesq === ('Pogba')){
        imag.src = "PogbaW.jpeg"
        resp.innerHTML = "Paul Pogba é um jogador de futebol profissional francês amplamente reconhecido como um dos meio-campistas mais talentosos do mundo. Ele já jogou por clubes de ponta como o Manchester United na Premier League Inglesa e a Juventus na Serie A Italiana. Pogba é conhecido por suas habilidades técnicas excepcionais, visão de jogo e físico impressionante em campo. Ele representou a seleção nacional francesa e foi um jogador-chave em seus sucessos, incluindo a conquista da Copa do Mundo da FIFA em 2018."
        document.body.style.background = "url('PogbaClub.jpg') center center / cover"
        txt1.innerHTML = "Paul Labile Pogba"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#840304"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#840304"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.8"
    }else if (pesq === ("CR7") || pesq === ("Cristiano Ronaldo") || pesq === ('Papai Cris')){
        imag.src = "Cr7W.jpg"
        resp.innerHTML = "Cristiano Ronaldo é um dos maiores jogadores de futebol da história. Nascido em Portugal, ele começou sua carreira profissional no Sporting Clube de Portugal antes de se transferir para o Manchester United, onde se destacou e conquistou vários títulos, incluindo a UEFA Champions League. Em 2009, ele se juntou ao Real Madrid, onde se tornou o maior artilheiro da história do clube e ganhou inúmeros troféus, incluindo quatro vezes a Liga dos Campeões da UEFA."
        document.body.style.background = "url('Cr7Club.jpg') center center / cover"
        txt1.innerHTML = "Cristiano Ronaldo dos Santos Aveiro"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#e7e4e9"
        resp.style.opacity = "0.9"
        txt1.style.width = "900px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#c39153"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
    }else if (pesq === ("Lanpard") || pesq === ("Frank Lampard")){
        imag.src = 'LanpardW.jpg'
        resp.innerHTML = "Frank Lampard é uma figura icônica no mundo do futebol, especialmente no Chelsea. Como jogador, ele é considerado uma lenda do clube, tendo sido seu maior artilheiro de todos os tempos até ser ultrapassado por Tammy Abraham. Lampard jogou no Chelsea por 13 anos e foi fundamental em várias conquistas, incluindo três títulos da Premier League, quatro Copas da Inglaterra, duas Copas da Liga e uma Liga dos Campeões da UEFA. Ele também foi um líder dentro de campo, atuando muitas vezes como capitão da equipe."
        document.body.style.background = "url('LanpardClub.jpg') center / cover"
        txt1.innerHTML = "Frank James Lampard OBE"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#a8a8a7"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#595e89"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
    }else if (pesq === ("Henry")){
        imag.src = "HenryW.jpg"
        resp.innerHTML = 'Thierry Henry é um dos maiores jogadores de futebol de todos os tempos. O ex-atacante francês é amplamente reconhecido por sua habilidade excepcional, velocidade, técnica refinada e instintos de artilharia. Ele teve uma carreira brilhante, jogando por clubes de prestígio como o Arsenal, Barcelona e New York Red Bulls, bem como representando a seleção francesa.'
        document.body.style.background = "url('HenryClub.jpeg') center / cover"
        txt1.innerHTML = "Thierry Daniel Henry"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#3a0a14"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#6d3841"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
        resp.style.color = "white"
    }else if (pesq === ("Gerrard")){
        imag.src = 'GerrardW.jpg'
        resp.innerHTML = "Steven Gerrard é uma lenda do futebol inglês, conhecido principalmente por sua longa e distinta carreira no Liverpool Football Club. Gerrard é amplamente considerado um dos melhores meio-campistas da sua geração e um dos maiores jogadores da história do clube."
        document.body.style.background = "url('GerrardClub.jpg') center / cover"
        txt1.innerHTML = "Steven George Gerrard"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#50090a"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#54090a"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
        resp.style.color = "white"
    }else if (pesq === "Rooney"){
        imag.src = "RooneyW.jpg"
        resp.innerHTML = "Wayne Rooney é um dos jogadores mais icônicos do futebol inglês e uma figura lendária no Manchester United e na seleção inglesa. Ele é conhecido por sua habilidade excepcional, visão de jogo e instinto de artilharia."
        document.body.style.background = "url('PogbaClub.jpg') center / cover"
        txt1.innerHTML = "Wayne Mark Rooney"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#840304"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#840304"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
        resp.style.color = "white"
    }else if (pesq === ("James Rodríguez") || pesq ===('James') ){
        imag.src = 'JamesW.jpg'
        resp.innerHTML = "James Rodríguez é um talentoso jogador de futebol colombiano conhecido por sua habilidade técnica excepcional, visão de jogo e capacidade de criar jogadas criativas. Ele ganhou destaque internacional durante a Copa do Mundo FIFA de 2014, onde teve uma atuação brilhante e foi o artilheiro do torneio, levando a Colômbia às quartas de final."
        document.body.style.background = "url('JamesF.png') center / cover"
        txt1.innerHTML = "James David Rodríguez Rubio"
        txt2.innerHTML = ""
        resp.style.backgroundColor = "#010d51"
        resp.style.opacity = "0.9"
        txt1.style.width = "800px"
        txt1.style.margin = "auto"
        txt1.style.borderRadius = "10px"
        txt1.style.backgroundColor = "#c5a601"
        txt1.style.opacity = "0.8"
        imag.style.opacity = "0.9"
        resp.style.color = "white"
    }
    
}
