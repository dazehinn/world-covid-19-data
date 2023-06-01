import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Globalstats from './components/Globalstats';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Globalstats />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
