import React, { Component } from 'react';
/*import logo from './img/logo.svg';*/
import './App.css';
import CardMin from './Cards/CardMin';
import axios from 'axios';

const quantity = 3;
axios.get(`http://localhost:3002/trend-films/${quantity}`)
      .then(res => {
          const films = res.data;
          console.log('films = ');console.log(films);
      });

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Не знаешь, что посмотреть?</h1>
          <p>У нас ты найдешь фильмы, которые заслуживают внимания.</p>
          <p> Новинки и старое доброе кино согласно рейтингу imdb, а также наши собственные рекомендации.</p>
        <CardMin/>
      </div>
    );
  }
}

export default App;
