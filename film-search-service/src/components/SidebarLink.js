import React from 'react';
//import logo from '../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from 'http://gidonline.in/img/3d3533f0f_200x300.jpg';

const SidebarLink = (props) => {
    return (
        <div className="sidebar__item">
            {props.chartName}
        </div>
    )
};

export default SidebarLink;