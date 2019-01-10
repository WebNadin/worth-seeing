import React from 'react';
//import logo from '../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from 'http://gidonline.in/img/3d3533f0f_200x300.jpg';

class Sidebar extends React.Component {
    state = {
        chartType: 'top_rated_movies',
        chartTypeInitial: 'top_rated_movies',
        charts: [
            {
                name: 'Фильмы по рейтингу',
                type: 'top_rated_movies'
            },
            {
                name: 'Фильмы по количеству просмотров',
                type: 'most_popular_movies'
            },
            {
                name: 'Сериалы по рейтингу',
                type: 'top_rated_tv'
            },
            {
                name: 'Сериалы по количеству просмотров',
                type: 'most_popular_tv'
            }
        ]
    };

    render() {
        let chartsList = this.state.charts.map((chart, i)=> {
                return (
                    <div key={i} className="sidebar__item" onClick={() => { this.props.updateChartType(chart.type)}}>{chart.name}</div>
                )
            }
        );
        return (
            <div className="sidebar">{chartsList}</div>
        )
    };
}
export default Sidebar;