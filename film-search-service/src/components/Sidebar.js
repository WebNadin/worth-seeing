import React from 'react';
import burger from '../img/burger.png';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from 'http://gidonline.in/img/3d3533f0f_200x300.jpg';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: 'top_rated_movies',
            bg: 'bg-grad',
            isSidebarOpened: 'hidden',
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
    }

    toggleSidebar = () => {
        let currentClass = (this.state.isSidebarOpened === "hidden") ? "shown" : "hidden";
        this.setState({isSidebarOpened: currentClass});
    };


    render() {
        let chartsList = this.state.charts.map((chart, i)=> {
                return (
                    <div key={i} className="b_links__item" onClick={() => { this.props.updateChartType(chart.type)}}>{chart.name}</div>
                )
            }
        );
        return (

            <div className={'sidebar ' + this.state.isSidebarOpened}>
                <div
                    className="sidebar__burger"
                    onClick={this.toggleSidebar}
                >
                    <img src={burger} alt="logo"/>
                </div>
                <div className="sidebar__title"><h2>Подборки</h2></div>
                <div className='sidebar__b_links'>{chartsList}</div>
            </div>
        )
    };
}
export default Sidebar;