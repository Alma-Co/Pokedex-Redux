/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import PokemonList from './components/PokemonList';
import configureStore from './redux/configureStore';

const pokedexStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={pokedexStore}>
      <PokemonList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
