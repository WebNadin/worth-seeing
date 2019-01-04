import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Rating from './components/Rating';
//import Background from './img/bg-page.jpg';


class App extends Component {
    render() {
        return (
            <div className="App bg-page">
                <div className="nn-container">
                    <Header />
                    <Card />
                    {/*<div className="nn-load-more">
                     Загрузить еще 20 фильмов
                     </div>*/}
                    <Rating />
                </div>
            </div>
        );
    }
}

export default App;


