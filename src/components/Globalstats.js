/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../redux/statisticsSlice';
import '../App.css'
import { showDetails } from '../redux/statisticsSlice';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CountryStats from './CountryStats';

const Globalstats = () => {
  const { dataArray/*, isLoading */ } = useSelector((state) => state.Covid);
    const dispatch = useDispatch();

  
    // if (dataArray.length === 0) {
    //     setTimeout(() => {
    //       dispatch(fetchCovidData());
    //     }, '1000');
    //   }
    
    useEffect(() => {
      dispatch(fetchCovidData());
      }, [dispatch, fetchCovidData]);
    
    
  return (
    <div className='countryContainer'>
        {dataArray.map((data) => (
          <CountryStats key={data.id} details={data} />
          
        ))
}
        {/* <FaArrowRight className="fontIcon" /> */}
    </div>
  )}
export default Globalstats;
