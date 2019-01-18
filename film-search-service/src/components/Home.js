import React, { Component } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartType: 'top_rated_tv'
        };
    }

    updateChartType = (value) => {
        this.setState({chartType: value})
    };

    render() {
        return (
            <div className="home">
                <div>{this.state.chartType}</div>
                <Card chartType={this.state.chartType}/>
                <Sidebar updateChartType={this.updateChartType}/>
            </div>
        )
    }
}

export default Home;
