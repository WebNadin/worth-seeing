import React, { Component } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartType: 'top_rated_tv',
            genreType: 'action'
        };
    }

    updateChartType = (value) => {
        this.setState({chartType: value})
    };

    render() {
        return (
            <div className="home bg-1">
                <Card chartType={this.state.chartType} genreType={this.state.genreType}/>
                <Sidebar updateChartType={this.updateChartType}/>
            </div>
        )
    }
}

export default Home;
