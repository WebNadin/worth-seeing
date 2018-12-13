import React from 'react';
import logo from '../img/logo.png';
//import logo from 'http://gidonline.in/img/3d3533f0f_200x300.jpg';

const Header = (props) => {
    let slogan = {
        title: 'Фильмы, которые заслуживают внимания.',
        text: 'Новинки и старое доброе кино согласно рейтингу imdb, а также наши собственные рекомендации.'
    };
    return (
        <div className="nn-col nn-col_2 bg-1-opac">
            <div className="nn-col_2_item">
                <div className="logo">
                    <div className="logo__img">
                        <img class='_w-100' src={logo} alt="logo"/>
                    </div>
                    <div className="logo__title">
                        С душой и для души!
                    </div>
                </div>
            </div>
            <div className="nn-col_2_item">
                <div className="slogan"></div>
                <h1 className="slogan__title">{slogan.title}</h1>
                <div className="slogan__text">
                    <p>{slogan.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;