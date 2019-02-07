/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

const Filters = () => {
    let genres = [
        {
            title: "боевик",
            id: "action"
        },
        {
            title: "детектив",
            id: "crime"
        },
        {
            title: "драма",
            id: "drama"
        },
        {
            title: "исторический",
            id: "history"
        },
        {
            title: "комедия",
            id: "comedy"
        },
        {
            title: "мистика",
            id: "mystery"
        },
        {
            title: "мультфильм",
            id: "animation"
        },
        {
            title: "вестерн",
            id: "western"
        },
        {
            title: "военный",
            id: "war"
        },
        {
            title: "мюзикл",
            id: "musical"
        },
        {
            title: "нуар",
            id: "film-noir"
        },
        {
            title: "о музыке",
            id: "music"
        },
        {
            title: "приключения",
            id: "adventure"
        },
        {
            title: "роман",
            id: "romance"
        },
        {
            title: "семейный",
            id: "family"
        },
        {
            title: "спорт",
            id: "sport"
        },
        {
            title: "триллер",
            id: "thriller"
        },
        {
            title: "ужасы",
            id: "horror"
        },
        {
            title: "фантастика, фентези",
            id: "fantasy"
        },
        {
            title: "научная фантастика",
            id: "sci-fi"
        },
        {
            title: "биографический",
            id: "biography"
        },
        {
            title: "документальный",
            id: "documentary"
        }
    ];
    let genresList = genres.map((genre, i) => {
        console.log('genres.length = ');console.log(genres.length);
        if (i == genres.length - 1 || i == genres.length - 2 || i == genres.length - 3 ||i == genres.length - 4) {
            var specialWidth =' nn-b_buttons__item_long';
        }
        else var specialWidth ='';

        return (

            <div key={i} className={"nn-b_buttons__item" +(specialWidth)}>
                <div className="nn-button">
                    <div className="nn-button__title">{genre.title}</div>
                </div>
            </div>
        )
    });

    return <div className="nn-b_buttons">{genresList}</div>;
};


export default Filters;
