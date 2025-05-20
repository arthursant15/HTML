//EXPLICAÇÃO:
// A função fetch é uma funcão assincrona, ou seja, quando ela mandar uma requirição ao servidor o programa não sabe ao certo se ela irá voltar alguma informação, e é por isso que antes botamos a propriedade await que significa "esperar" espere o quanto for até ter a informação certa, porém ela só pode ser usada em funções assincronas e para isso temos que nomear a função como assincrona colocando a propriedade async sync do ingles "sincronização" e um "a" de negação.
const pokemonName = document.querySelector('.pokemon_name');
const pokemonId = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const fetchPokemon = async (pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
    
}

const renderPokemon = async (pokemon) =>{
    const data = await fetchPokemon(pokemon);
    const pokemonIn = document.querySelector('.input__search'.value);
    pokemon = pokemonIn
    pokemonName.innerHTML = data.name;
    pokemonId.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    /*o src é a propriedade em que se é usada como se fosse um innerHTML como no texto, porem como elas sao imagens ela precisa desse src*/
}

renderPokemon('6')

