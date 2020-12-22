const axios = require('axios');

function pokedexController() {
  async function getMethod(req, res) {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';
    try {
      const pokemons = await axios.get(endpoint);
      res.json(pokemons.data.results);
    } catch (error) {
      res.send(error);
    }
  }

  return { getMethod };
}

module.exports = pokedexController;
