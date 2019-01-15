import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
//import Film from './components/Film';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Background from './img/bg-page.jpg';


class App extends Component {
    render() {
        return (

            <div className="App bg-page">
                <div className="nn-container">
                    <Header />
                    <Home/>
                </div>
            </div>
        );
    }
}
export default App;


