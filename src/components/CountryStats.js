/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const CountryStats = (props) => {
  const { details } = props;
  const { country, region } = details;
  return (
    <li>
        <div className="countryCard">
            <Link to={`details/${country + '/' + region}`}>
                <h2>{country}</h2>
                <h5>{region}</h5>
            </Link>

        </div>
    </li>
  )
};

export default CountryStats;
