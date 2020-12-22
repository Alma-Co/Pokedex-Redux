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

async function getPokedex(req, res) {
  const pokedex = {};
  let pokemonData = [];
  const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0';
  const pokeImgUrl = 'https://pokeapi.co/api/v2/pokemon-form';
  try {
    const { data } = await axios.get(pokeApiUrl);
    const pokemonList = data.results;
    for (let id = 1; id < 50; id++) {
      const { data } = await axios.get(`${pokeImgUrl}/${id}`);
      pokemonData = [...pokemonData, data.sprites.front_default];
    }
    res.send(pokemonData);
  } catch (error) {
    res.send(error);
  }
}

// pokemonList.map(obj=> ({
//   ...obj,
//   const id = obj.url.split('/')[5];
//   picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`  }));
