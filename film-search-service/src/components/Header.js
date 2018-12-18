import React from 'react';
import logo from '../img/logo.png';
//import logo from 'http://gidonline.in/img/3d3533f0f_200x300.jpg';

const Header = (props) => {
    let slogan = {
        title: 'Фильмы, которые заслуживают внимания.',
        text: 'Новинки и старое доброе кино согласно рейтингу imdb, а также наши собственные рекомендации.'
    };
    return (
        <div className="header">
            <div className="nn-logo-slogan">
                <div className="nn-logo-slogan__item nn-logo-slogan__item_left">
                    <div className="logo">
                        <div className="logo__img">
                            <img className='_w-100' src={logo} alt="logo"/>
                        </div>
                    </div>
                </div>
                <div className="nn-logo-slogan__item">
                    <div className="slogan"></div>
                    <h1 className="slogan__title">{slogan.title}</h1>
                    <div className="slogan__text">
                        <p>{slogan.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;