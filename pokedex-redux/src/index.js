/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import PokemonList from './views/List/PokemonList';
import configureStore from './redux/configureStore';

const pokedexStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={pokedexStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PokemonList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
