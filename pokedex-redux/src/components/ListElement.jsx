/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './ListElement.css';

function ListElement({ item }) {
  return (
    <Link to={`/${item.id}`}>
      <div className="card__margins">
        <li key={+item.id} className="card-element">
          <img src={item.picture} alt={item.name} className="card__img" />
          <h2 className="card__title">{`${item.name}`}</h2>
        </li>
      </div>
    </Link>
  );
}

export default ListElement;
