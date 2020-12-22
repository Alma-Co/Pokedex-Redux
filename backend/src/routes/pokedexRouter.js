const { Router } = require('express');
const pokedexController = require('../controllers/pokedexController');
const pokemonController = require('../controllers/pokemonController');

function pokedexRouter() {
  const router = Router();
  const pokedex = pokedexController();
  const pokemon = pokemonController();

  router.route('/')
    .get(pokedex.getMethod);

  router.route('/:id')
    .get(pokemon.getMethod);

  return router;
}

module.exports = pokedexRouter;
