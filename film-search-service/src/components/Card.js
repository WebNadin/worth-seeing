/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

export class Card extends Component {
    constructor(card) {
        super(card);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        const quantity = 11;
        axios.get(`http://localhost:3002/charts/most_popular_movies/rating/desc/${quantity}`)
            .then(res => {
                let filmsList = res.data.map((film, index) => {
                    let imgUrl = film.poster;
                    let posterStyle = {
                        backgroundImage: 'url("' + imgUrl + '")'
                    };
                    let rating = Number(film.rating) * 10;
                    let ratingStyle = {
                        background: `url(${stars}) no-repeat center`,
                        backgroundSize: 'contain'
                    };
                    let ratingStyleGray = {
                        background: `url(${starsGray}) no-repeat center`,
                        backgroundSize: 'contain',
                        zIndex: 10,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: {rating}
                    };
                    return (
                        <div key={index} className="nn-col_4__item">
                            <div className="nn-card nn-card_dark bg-2">
                                <div className="nn-card__img-block" style={posterStyle}>
                                </div>
                                <div className="nn-card__title">{film.name}</div>
                                <div className="nn-card__rating nn-rating" style={ratingStyle}>
                                    <div className="nn-wr_stars">
                                        <div className="nn-rating__stars"></div>
                                        <div className="nn-rating__stars nn-rating__stars_gray" style={ratingStyleGray}></div>
                                    </div>
                                    {/*
                                    <div className="nn-rating__number">{rating}</div>
                                  */}
                                </div>

                            </div>
                        </div>
                    )
                });
                this.setState({films: filmsList});
            })

    }

    render() {
        const {films} = this.state;
        return <div className="nn-col nn-col_4 bg-1">{films}</div>
    }

}

export default Card;

