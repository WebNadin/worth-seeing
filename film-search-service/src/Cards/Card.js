/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';

class Card extends Component {
    constructor(card) {
        super(card);
        this.state = {
            films: []
        }
    }

    componentWillMount() {
        const quantity = 11;
        axios.get(`http://localhost:3002/charts/most_popular_movies/rating/desc/${quantity}`)
            .then(res => {
                let filmsList = res.data.map((film, index) => {
                    return (
                        <div key={index} className="nn_col_6__item">
                            <div className="nn_card">
                                <div className="nn_card__img">
                                    < img src={film.poster} alt=""/>
                                </div>
                                <div className="nn_card__title">
                                    <p>{film.name}</p>
                                </div>
                                <div className="nn_card__rating">
                                    <p>{film.rating}</p>
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
        return <div className="nn_col nn_col_6">{films}</div>
    }

}

export default Card;


