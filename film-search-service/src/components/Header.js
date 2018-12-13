import React from 'react';

const Header = (props) => {
    let slogan = {
        title: 'Не знаешь, что посмотреть?',
        text1: 'У нас ты найдешь фильмы, которые заслуживают внимания.',
        text2: 'Новинки и старое доброе кино согласно рейтингу imdb, а также наши собственные рекомендации.'
    };
    return (
        <div className="nn-col nn-col_1">
            <div className="slogan"></div>
            <h1 className="slogan__title">{slogan.title}</h1>
            <div className="slogan__text">
                <p>{slogan.text1}</p>
                <p>{slogan.text2}</p>
            </div>
        </div>
    );
};

export default Header;