import actionTypes from '../actions/actions-types';

export default function pokeReducer(state = {}, action) {
  let loading = '';
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS_LIST: loading = { ...state, pokemonList: action.pokemonList };
      break;
    default:
      loading = state;
  }
  return loading;
}
