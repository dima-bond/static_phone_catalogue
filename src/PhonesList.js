import React from 'react';
import { Link } from 'react-router-dom';

export const PhonesList = ({ phonesList }) => {

  return (
    <ul className="phones">
      {phonesList.map(phone => (
        <li key={phone.id} className="thumbnail">
        <Link to={`/static_phone_catalogue/phones/${phone.id}`} className="thumb">
          <img alt={phone.name} src={phone.imageUrl} />
        </Link>

        <div className="phones__btn-buy-wrapper">
          <a className="btn btn-success" href="#buy">
            Add
          </a>
        </div>

        <Link to={`/static_phone_catalogue/phones/${phone.id}`}>{phone.name}</Link>
        <p>{phone.snippet}</p>
      </li>
      ))}
    </ul>
  );
}