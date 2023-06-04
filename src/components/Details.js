import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { showDetails } from '../redux/statisticsSlice';
import '../App.css';

const Details = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(showDetails(id));
  });

  const { dataArray } = useSelector((state) => state.Covid);

  const filteredStats = dataArray.filter((data) => data.show);

  return (
    <div className="detailsContainer">
      {
        filteredStats.map((data) => (
          <div key={uuidv4()} className="detailContainer">
            <h1>
              Country:
              { ' ' }
              { data.country }
              ,
              { ' ' }
              { data.region }
            </h1>
            <h2>
              New Cases:
              {' '}
              { data.cases.new }
              ,
            </h2>
            <h2>
              Total Cases:
              {' '}
              { data.cases.total }
            </h2>
          </div>
        ))
      }
    </div>
  );
};

export default Details;
