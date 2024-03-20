//Styles
import './App.css';

//Dependencies
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = "http://localhost:3000/pessoas";

function App() {
  
  const [ pessoas, setPessoas ] = useState();

  const getPersons = async () => {
    try {
      //Requisição com axios
      const res = await axios.get(url);

      const data = res.data;

      /*
      //Requisição com fetch
      const res = await fetch(url);

      const data = await res.json();
      */

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
    </div>
  );
}

export default App;
