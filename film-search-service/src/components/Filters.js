/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

const Filters = (props) => {
    let genres = [
        {
            title: "биографический",
            id: "biography"
        },
        {
            title: "боевик",
            id: "action"
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
            title: "детектив",
            id: "crime"
        },
        {
            title: "документальный",
            id: "documentary"
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
            title: "мюзикл",
            id: "musical"
        },
        {
            title: "научная фантастика",
            id: "sci-fi"
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
        }
    ];
    let genresList = genres.map((genre, index) => {
        return (
            <div className="nn-b_buttons__item">
                <div key={index} className="nn-button bg-grad">
                    <div className="nn-button__title">{genre.title}</div>
                </div>
            </div>
        )
    });

    return <div className="nn-b_buttons">{genresList}</div>;
};


export default Filters;

