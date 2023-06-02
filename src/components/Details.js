import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { showDetails } from '../redux/statisticsSlice';
import forward from '../assets/forward.png';
import back from '../assets/back.png';
import settings from '../assets/settings.png';
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
    <>
      <nav className="home-nav">
        <div className="nav-container">
          <div className="left-nav">
            <button type="button" className="back-button">
              <Link to="/">
                <img className="arrow" src={back} alt="arrow back" />
              </Link>
            </button>
            <p className="nav-year">2023</p>
          </div>
          <div>
            <p className="nav-header">Global Covid-19 Statistics</p>
          </div>
          <div className="right-nav">
            <img className="settings-image" src={settings} alt="settings" />
          </div>
        </div>
      </nav>
      <div>
        {
          filteredStats.map((data) => (
            <div key={data.id}>
              <div className="header">
                <div className="map">
                  <div className="map-overlay" />
                </div>
                <div className="header-text">
                  <h2>{data.country}</h2>
                  <p className="rate">
                    {data.region}
                  </p>
                </div>
              </div>
              <p className="main-header">Detail Statistics</p>
              <div className="detail-container">
                <div key={data.id}>
                  <div className="stat-detail">
                    <p className="left-col">New Cases:</p>
                    <div className="right-col">
                      <p>
                        {data.cases.new}
                      </p>
                    </div>
                    <img className="foward-img" src={forward} alt="forward" />
                  </div>
                  <div className="stat-detail">
                    <p className="left-col">Total Cases:</p>
                    <div className="right-col">
                      <p>
                        {data.cases.total}
                      </p>
                    </div>
                    <img className="foward-img" src={forward} alt="forward" />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Details;
