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

    componentDidMount() {
        const quantity = 11;
        axios.get(`http://localhost:3002/charts/most_popular_movies/rating/desc/${quantity}`)
            .then(res => {
                let filmsList = res.data.map((film, index) => {
                    let posterStyle = {
                        /*color: 'white'*/
                    };
                    return (
                        <div key={index} className="nn-col_4__item">
                            <div className="nn-card nn-card_dark bg-2">
                                <div className="nn-card__img-block" style={posterStyle}>
                                </div>
                                <div className="nn-card__title">{film.name}</div>
                                <div className="nn-card__rating">
                                    <div>{film.rating}</div>
                                </div>
                                {/*<img className='test-height' src={film.poster} alt=""/>*/}
                            </div>
                        </div>
                    )
                });
                this.setState({films: filmsList});
            })

    }

    render() {
        const {films} = this.state;
        return <div className="nn-col nn-col_4">{films}</div>
    }

}

export default Card;


