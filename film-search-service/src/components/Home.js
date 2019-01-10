import React, { Component } from 'react';
import Card from './Card';
import SidebarLink from './SidebarLink';

class Home extends Component {
    //onCangeChart
    render() {
        return (
            <div className="home">
                <Card />

                <div className="sidebar">
                    <SidebarLink chartName="Сериалы по количеству просмотров" chartLinkId="most_popular_tv"/>
                    <SidebarLink chartName="Сериалы по рейтингу" chartLinkId="top_rated_tv"/>
                    <SidebarLink chartName="Фильмы по количеству просмотров" chartLinkId="most_popular_movies"/>
                    <SidebarLink chartName="Фильмы по рейтингу" chartLinkId="top_rated_movies"/>
                </div>

            </div>
        )
    }
}

export default Home;
