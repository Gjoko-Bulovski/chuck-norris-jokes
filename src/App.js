import React,{ useState, useEffect } from 'react';
import './App.css';
import { async } from 'q';

function App() {

  useEffect(() => {
    getData();
  }, []);

  const [ quote, setQuote ] = useState();

  const getData = async () => {
    try{
      let chuckJokes = await fetch(`https://api.chucknorris.io/jokes/random`);
      let data = await chuckJokes.json();
      setQuote(data.value);
    }
    catch(error) {
      console.warn(`We have an error here: ${error}`);
    }
  }

  return (
    <div className="App">
      <img className="image" src="img/image.jpg" alt="chuck norris" />
      <div className="opacity"></div>
      <div className="container">
        <h1>Chuck Norris Jokes</h1>
        <button className="getjoke" onClick={getData}>Get Joke</button>
        <p className="quote">{quote}</p>
      </div>
    </div>
  );
}

export default App;
