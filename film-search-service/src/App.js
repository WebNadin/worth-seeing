import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {Router, Route, browserHistory} from "react-router";
//import Background from './img/bg-page.jpg';


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'home'} component={'Home'}/>
            </Router>
        );
    }
}
export default App;


