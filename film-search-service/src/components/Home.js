import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Charts from './components/Charts';

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
                    <Charts />
                </div>
            </div>
        );
    }
}
export default App;
