import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Film from './components/Film';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Background from './img/bg-page.jpg';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App bg-page">
                    <div className="nn-container">
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/film' component={Film}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;


