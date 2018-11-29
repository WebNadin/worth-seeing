/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        const quantity = 2;
        axios.get(`http://localhost:3002/charts/most_popular_movies/rating/desc/${quantity}`)
            .then(res => {
                let filmsList = res.data.map((film) => {
                    return (
                        <div>
                            <img src={film.poster} alt=""/>
                            <p>{film.name}</p>
                            <p>{film.rating}</p>
                        </div>
                    )
                });
                this.setState({films: filmsList});
            })

    }

    render() {
        const {films} = this.state;
        return <div>{films}</div>
    }

}

export default Card;


