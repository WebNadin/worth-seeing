import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Filters from './components/Filters';
//import Film from './components/Film';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Background from './img/bg-page.jpg';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genreType: 'action'
        };
    }

    updateGenreType = (value) => {
        this.setState({genreType: value})
    };

    render() {
        return (

            <div className="App bg-page">
                <div className="nn-container">
                    <Header />
                    <Filters updateGenreType={this.props.updateGenreType}/>
                    <Home/>
                </div>
            </div>
        );
    }
}
export default App;


