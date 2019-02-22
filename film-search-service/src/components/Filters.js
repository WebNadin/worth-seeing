/**
 * Created by Nadin on 26.11.2018.
 */
import React from 'react';
import '../scss/main.scss';

const Filters = () => {
    this.genreType = 'action';

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
        let specialWidth ='';
        if (i === genres.length - 1 || i === genres.length - 2 || i === genres.length - 3 ||i === genres.length - 4) {
            specialWidth =' _long-' + genre.id;
        }

        return (

            //<div key={i} className={"nn-b_buttons__item" +(specialWidth)}  onClick={() => {
            // this.props.updateGenreType(genre.id)}}>
            <div key={i} className={"nn-b_buttons__item" +(specialWidth)}  onClick={() => { this.updateGenreType(genre.id)}}>
                <div className="nn-button">
                    <div className="nn-button__title">{genre.title}</div>
                </div>
            </div>
        )
    });

    return <div className="nn-b_buttons">{genresList}</div>;
};


export default Filters;

