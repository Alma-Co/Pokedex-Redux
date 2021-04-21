/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getPokemonsList,
} from '../../redux/actions/poke-actions';
import ListElement from '../../components/ListElement';
import './PokemonList.css';

function PokemonList({ pokemonList, dispatch }) {
  useEffect(() => {
    if (!pokemonList && !pokemonList?.length) {
      dispatch(getPokemonsList());
    }
  }, [pokemonList?.length]);

  return (
    <div className="list_container">
      <h1>Pokedex</h1>
      { pokemonList
            && pokemonList.map((item) => <ListElement item={item} key={+item.id} />)}
    </div>

  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonList: pokeReducer.pokemonList,
  };
}

connect();
export default connect(mapStateToProps)(PokemonList);
