/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPokemonsList,
} from '../redux/actions/poke-actions';

// eslint-disable-next-line react/prop-types
function PokemonList({ pokemonList, dispatch }) {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!pokemonList && !pokemonList?.length) {
      dispatch(getPokemonsList());
    }
  }, [pokemonList?.length]);

  console.log(pokemonList);
  return (
    <>
      {
      pokemonList
      && pokemonList?.map((pokemon, i) => (
        <div>
          <h2>{pokemon.name}</h2>
          <img alt={i} src={pokemon.picture} />
        </div>
      ))
}
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
