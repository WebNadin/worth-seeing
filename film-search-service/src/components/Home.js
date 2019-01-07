import React, { Component } from 'react';
import Card from './Card';
import Header from './Header';
import Charts from './Charts';

class Home extends Component {
    render() {
        return (
            <div className="App bg-page">
                <div className="nn-container">
                    <Header />
                    <Card />
                    <Charts />
                </div>
            </div>
        );
    }
}
export default Home;
