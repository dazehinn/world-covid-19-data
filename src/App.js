import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Globalstats from './components/Globalstats';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<Globalstats />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
