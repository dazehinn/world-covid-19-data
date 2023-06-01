/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const CountryStats = (props) => {
  const { details } = props;
  const { country, region } = details;
  return (
    <li>
        <div>
            <Link to={`details/${country + '/' + region}`}>
                <h2>{country}</h2>
                <h5>{region}</h5>
            </Link>

        </div>
    </li>
  )
};

export default CountryStats;
