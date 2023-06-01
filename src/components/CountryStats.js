import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import '../App.css';

const CountryStats = (props) => {
  const { details } = props;
  const { id, country, region } = details;
  return (

    <li className="listItem">
      <div className="home-item-info">
        <Link to={`details/${id}`}>
          <h4>{country}</h4>
          <h6>{region}</h6>
          <FaArrowRight className="fontIcon" />
        </Link>
      </div>
    </li>
  );
};

CountryStats.propTypes = {
  id: PropTypes.string,
  country: PropTypes.string.isRequired,
  details: PropTypes.string,
};

CountryStats.defaultProps = {
  id: '',
  details: '',
};
export default CountryStats;
