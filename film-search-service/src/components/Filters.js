/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

export class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: [
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
            ]
        };
        this.buildFilmsList = this.buildFilmsList.bind(this);
        this.getFilmsData = this.getFilmsData.bind(this);
    }

    getFilmsData() {
        const quantity = 5;
        axios.get(`http://localhost:3002/charts/${this.props.chartType}/rating/desc/${quantity}`)
            .then(res => {
                let filmsList = res.data.map((film, index) => {
                    let imgUrl = film.poster;
                    let posterStyle = {
                        backgroundImage: 'url("' + imgUrl + '")'
                    };
                    let rating = Number(film.rating) * 10;
                    let styleStars = {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'hidden',
                        width: `${rating}%`
                    };
                    return (
                        <div key={index} className="nn-b_cards__item">
                            <div className="nn-card nn-card_dark bg-2">
                                <div className="nn-card__img-block" style={posterStyle}>
                                </div>
                                <div className="nn-card__title">{film.name}</div>
                                <div className="nn-card__rating nn-rating">
                                    <div className="nn-rating__item _relative stars">
                                        <img className='' src={starsGray} alt=""/>
                                        <div className="stars_gray" style={styleStars}>
                                            <img className='' src={stars} alt=""/>
                                        </div>
                                    </div>
                                    <div className="nn-rating__item"><span>{film.rating}</span></div>
                                </div>

                            </div>
                        </div>
                    )
                });
                this.setState({
                    films: filmsList
                });
            });


    }

    componentDidMount() {
        this.getFilmsData();
        this.buildFilmsList();
    }


    render() {
        const {films} = this.state;
        return <div className="nn-b_cards bg-1">{films}</div>
    }

}

export default Filters;

