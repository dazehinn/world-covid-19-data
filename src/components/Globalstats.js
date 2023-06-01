import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';
import { fetchCovidData } from '../redux/statisticsSlice';
import CountryStats from './CountryStats';
import '../App.css';

const Globalstats = () => {
//  const [query, setQuery] = useState('');
  // const Search = (event) => {
  //   setQuery(event.target.value);
  // };
  const { dataArray, isLoading } = useSelector((state) => state.Covid);

  const filteredData = dataArray.filter((data) => (
    data.country.toLowerCase()
    /* .includes(query.toLowerCase()) */
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <ul className="itemList">
      {filteredData.map((data) => (
        <CountryStats key={data.id} details={data} />
      ))}
      <FaArrowRight className="fontIcon" />
    </ul>
  );
};
export default Globalstats;
