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
                <p>Home.ChartType={this.state.chartType}</p>

                <Card chartType={this.state.chartType}/>

                <div className="sidebar">

                    <Sidebar updateChartType={this.updateChartType}/>
                    {/*
                     <SidebarLink chartName="Фильмы наши рекомендации" chartLinkId="most_popular_tv"/>
                     <SidebarLink chartName="Фильмы по рейтингу" chartLinkId="top_rated_movies"/>
                     <SidebarLink chartName="Фильмы по количеству просмотров" chartLinkId="most_popular_movies"/>
                     <SidebarLink chartName="Сериалы по рейтингу" chartLinkId="top_rated_tv"/>
                     <SidebarLink chartName="Сериалы по количеству просмотров" chartLinkId="most_popular_tv"/>
                     */}
                </div>

            </div>
        )
    }
}

export default Home;
