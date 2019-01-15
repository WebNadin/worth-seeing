import React from 'react';
import burger from '../img/burger.png';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from 'http://gidonline.in/img/3d3533f0f_200x300.jpg';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: 'top_rated_movies',
            opened: 'hidden',
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
        /*document.getElementById('test').toggleClass('opened');*/
        const oldClassName = document.getElementById('test').className;
        const newClassName = oldClassName === 'sidebar__b_links hidden' ? 'sidebar__b_links shown' : 'sidebar__b_links hidden'
        document.getElementById('test').className = newClassName
    };


    /*toggleSidebar() {
     var css = (this.props.opened === "hidden") ? "show" : "hidden";
     this.setState({"opened":css});
     }*/


    /*toggleSidebar = () => {
     const currentState = this.state.opened;
     this.setState({opened: !currentState});
     console.log('currentState = ');console.log(currentState);
     };*/

    render() {
        let chartsList = this.state.charts.map((chart, i)=> {
                return (
                    <div key={i} className="sidebar__link" onClick={() => { this.props.updateChartType(chart.type)}}>{chart.name}</div>
                )
            }
        );
        return (
            <div className="sidebar bg-grad">
                <div
                    className="sidebar__burger"
                    onClick={this.toggleSidebar}
                >
                    <img src={burger} alt="logo"/>
                </div>
                <div className="sidebar__title"><h2>Подборки</h2></div>
                <div className="sidebar__b_links hidden"  id="test">{chartsList}</div>
            </div>
        )
    };
}
export default Sidebar;