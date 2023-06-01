/* eslint-disable */
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { showDetails } from '../redux/statisticsSlice';

const Details = () => {
  const { dataArray, isLoading } = useSelector((state) => state.Covid);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(showDetails(id));
  }, []);

  const filteredStats = dataArray.filter((country) => country.show === true);

  return (
    <Container>
      {console.log({filteredStats})};
      <div className="detailsContainer">
        {
          filteredStats.map((country) => (
            <>
              <div key={uuidv4()} >
                  <h2>
                    New Cases:
                    {' '}
                    {country.cases.new}
                  </h2>
                  <h2>
                    Total Cases:
                    {' '}
                    {country.country}
                  </h2>
                </div>
            </>
          ))
        }
      </div>
    </Container>
  )
}

export default Details