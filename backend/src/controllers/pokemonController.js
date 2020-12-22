const axios = require('axios');

function pokemonController() {
  async function getMethod(req, res) {
    const { id } = req.params;
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      const pokemon = await axios.get(endpoint);
      res.json(pokemon.data);
    } catch (error) {
      res.send(error);
    }
  }

  return { getMethod };
}

module.exports = pokemonController;
