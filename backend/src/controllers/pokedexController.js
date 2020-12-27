const axios = require('axios');

function pokedexController() {
  async function getMethod(req, res) {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
    try {
      const pokemons = await axios.get(endpoint);
      const pokemonsList = pokemons.data.results.map((obj) => (
        { ...obj, picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${obj.url.split('/')[6]}.png`, id: `${obj.url.split('/')[6]}` }));
      res.json(pokemonsList);
    } catch (error) {
      res.send(error);
    }
  }

  return { getMethod };
}

module.exports = pokedexController;
