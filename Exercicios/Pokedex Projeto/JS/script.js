//EXPLICAÇÃO:
// A função fetch é uma funcão assincrona, ou seja, quando ela mandar uma requirição ao servidor o programa não sabe ao certo se ela irá voltar alguma informação, e é por isso que antes botamos a propriedade await que significa "esperar" espere o quanto for até ter a informação certa, porém ela só pode ser usada em funções assincronas e para isso temos que nomear a função como assincrona colocando a propriedade async sync do ingles "sincronização" e um "a" de negação.
const pokemonName = document.querySelector('.pokemon_name');
const pokemonId = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search')
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

let searchPokemon = 1  //let = variavel de escopo global

const fetchPokemon = async (pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) =>{

    pokemonName.innerHTML = ('Loading...')
    pokemonId.innerHTML = ('')

    const data = await fetchPokemon(pokemon);
    if(data){
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        /*o src é a propriedade em que se é usada como se fosse um innerHTML como no texto, porem como elas sao imagens ela precisa desse src*/
        input.value = ''
        searchPokemon = data.id
    }else{
        pokemonImage.style.display = 'none'
        pokemonName.innerHTML = ('Error, not found :(')
        pokemonId.innerHTML = ('')
    }
}
form.addEventListener('submit', (event) =>{
    event.preventDefault() // aqui ele vai redefinir o padrão de um formulario que é de enviar o dado e não armazenar

    renderPokemon(input.value.toUpperCase())
    input.value = ''    
})
    prev.addEventListener('click', () =>{
        if(searchPokemon > 1){
            searchPokemon -= 1
            renderPokemon(searchPokemon)
        }
})
    next.addEventListener('click', () =>{
            searchPokemon+= 1
            renderPokemon(searchPokemon)
    })

renderPokemon(searchPokemon)

