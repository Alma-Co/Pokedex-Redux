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
    <section>
      <h1 style={{ textAlign: 'center' }}>Pokedex</h1>
      <div className="list_container">
        { pokemonList
            && pokemonList.map((item) => <ListElement item={item} key={+item.id} />)}
      </div>
    </section>
  );
}

function mapStateToProps({ pokeReducer }) {
  return {
    pokemonList: pokeReducer.pokemonList,
  };
}

connect();
export default connect(mapStateToProps)(PokemonList);
