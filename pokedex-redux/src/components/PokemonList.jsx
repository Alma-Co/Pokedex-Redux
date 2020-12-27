import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPokemonsList,
} from '../redux/actions/poke-actions';

function PokemonList({
  pokemonList, dispatch,
}) {
  useEffect(() => {
    if (!pokemonList && !pokemonList?.length) {
      dispatch(getPokemonsList());
    }
  }, []);

  return (
    <>
      {pokemonList
      && pokemonList.map((pokemon) => <p>{pokemon.name}</p>)}
    </>
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonList: pokeReducer.pokemonList,
  };
}

connect();
export default connect(mapStateToProps)(PokemonList);
