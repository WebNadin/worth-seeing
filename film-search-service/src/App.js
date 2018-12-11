import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
//import Background from './img/bg-page.jpg';


class App extends Component {
    render() {
        return (
            <div className="App bg-page">
                <Header />
                <div className="nn-container bg-1">
                    <Card />
                    {/*<div className="nn-load-more">
                     Загрузить еще 20 фильмов
                     </div>*/}
                </div>
            </div>
        );
    }
}

export default App;


