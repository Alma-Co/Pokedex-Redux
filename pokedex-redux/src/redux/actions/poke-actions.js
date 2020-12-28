/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actions-types';

function requestPokemonsList(pokemonList) {
  return {
    type: actionTypes.LOAD_POKEMONS_LIST,
    pokemonList,
  };
}

function requestPokemonsError(error) {
  return {
    type: actionTypes.ERROR_LOADING,
    error,
  };
}

export function getPokemonsList() {
  return async (dispatch) => {
    const endpointList = 'http://localhost:5000/pokemons';
    try {
      const getList = await axios.get(endpointList);
      dispatch(requestPokemonsList(getList.data));
    } catch (error) {
      dispatch(requestPokemonsError(error));
    }
  };
}
