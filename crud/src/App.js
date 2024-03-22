//Styles
import './App.css';

//Dependencies
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navigation/Navbar';
import Detalhes from './components/Detalhes';

const url = "http://localhost:3000/pessoas";

function App() {

  const [pessoas, setPessoas] = useState();

  const getPersons = async () => {
    try {

      /*
      //Requisição com fetch
      const res = await fetch(url);
      
      const data = await res.json();
      */

      //Requisição com axios
      const res = await axios.get(url);

      const data = res.data;

      setPessoas(data);

    } catch (e) {
      console.error("Request for getPersons FAILED: ", e);
    }
  }

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div className="App">
      <h1 className="title">Requisição dos dados</h1>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/details" element={<Detalhes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
