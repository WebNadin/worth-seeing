import React, { Component } from 'react';
/*import logo from './img/logo.svg';*/
import './App.css';
import CardMin from './Cards/CardMin';

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
