/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../redux/statisticsSlice';
import '../App.css'
import { showDetails } from '../redux/statisticsSlice';

const Globalstats = () => {
  const { dataArray/*, isLoading */ } = useSelector((state) => state.Covid);
    const dispatch = useDispatch();
  
  const handleClick = (country) => {
    dispatch(showDetails(country))
  }  
    if (dataArray.length === 0) {
        setTimeout(() => {
          dispatch(fetchCovidData());
        }, '1000');
      }
    
  return (
    <div className='countryContainer'>
        {dataArray.map((data) => (
            <div key={data.country+data.region} className="countryCard" onClick={() => handleClick(data.country+data.region)}>
                <h2>{data.country}</h2>
                <h3>{data.region}</h3>
            </div>
        ))
}
    </div>
  )}
export default Globalstats;
