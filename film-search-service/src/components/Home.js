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

    updateChartType = (chartValue) => {
        this.setState({chartType: chartValue})
    };

    updateGenreType = (value) => {
        this.setState({genreType: value});
        console.log('this.state.genreType = ');console.log(this.state.genreType);
    };


    render() {
        return (
            <div className="home bg-1">
                <div>{this.genreType}</div>
                <Card chartType={this.state.chartType} genreType={this.props.genreType}/>
                <Sidebar updateChartType={this.updateChartType}/>
            </div>
        )
    }
}

export default Home;
