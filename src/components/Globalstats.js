/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { fetchCovidData } from '../redux/statisticsSlice';
import settings from '../assets/settings.png';
import forward from '../assets/forward.png';
import '../App.css';

const Globalstats = () => {
  const { dataArray, isLoading, error } = useSelector((state) => state.Covid);

  const filteredData = dataArray.filter((data) => (
    data.country.toLowerCase()
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner animation="border" />
      </div>
    )
  }

  if (error) {
    return (
      <>
        <div className="error">Error: Please check your connection!</div>
      </>
    );
  }

  return (
    <>
    <nav className="home-nav">
        <div className="nav-container">
          <div className="left-nav">
            <p className="nav-year">2023</p>
          </div>
          <div>
            <p>Global Covid-19 Statistics</p>
          </div>
          <div className="right-nav">
            <img className="settings-image" src={settings} alt="settings" />
          </div>
        </div>
      </nav>
      <div className="header">
      <div className="map">
        <div className="map-overlay" />
      </div>
      <div className="header-text">
        <h2>Last Update</h2>
        <h2>3<sup style = {{color: "white"}}>rd</sup> March 2023</h2>
      </div>
    </div>
    <p className="main-header">Countries and Regions</p>
    <div className="stats-container">
      
    </div>

    <div className="stats-container">
      {
        filteredData.map((data) => (
          <div key={data.id} className="stat">
            <Link className="link" to={`details/${data.id}`}>
              <p className="time">{data.country}</p>
              <p className="stat-data">{data.region}</p>
              <img className="forward" src={forward} alt="forward" />
            </Link>
          </div>
        ))
      }
    </div>
    </>
  );
};

export default Globalstats;
