/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/index.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

export class Card extends Component {

    constructor(props, adress) {
        super(props);
        this.genreType = "drama";
        this.adress = `charts/top_rated_movies/rating/desc/`;
        this.state = {
            films: [],
            genreType: "",
            adress: `charts/top_rated_movies/rating/desc/`
        };
        this.getFilmsData = this.getFilmsData.bind(this);
    }

    getFilmsData(adress) {
        const quantity = 30;
        axios.get(`http://localhost:3002/${this.adress}${quantity}`)
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
                        <div key={index} className="nn-b_cards__item" onClick={() => { alert("Sorry. We still work" +
                         " on this page...")}}>
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


    };

    componentWillMount() {
        console.log("componentWillMount()");
        this.getFilmsData();
    }

    componentDidMount() {
        console.log("componentDidMount()");
        //setTimeout(document.getElementById("loaderPage").remove(), 10000);
    }

    componentDidUpdate(prevProps) {
        if (this.props.genreType !== prevProps.genreType) {
            this.adress = `genre/${this.props.genreType}/`;
            this.getFilmsData();
        }
        if (this.props.chartType !== prevProps.chartType) {
            this.adress = `charts/${this.props.chartType}/rating/desc/`;
            this.getFilmsData();
        }
    }

    render() {
        const {films} = this.state;
        console.log('render()');
        return <div className="nn-b_cards bg-1">
            {films}
        </div>
    }

}

export default Card;

