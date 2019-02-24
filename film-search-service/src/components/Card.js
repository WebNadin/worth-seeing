/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

export class Card extends Component {

    constructor(props) {
        super(props);
        this.genreType = "drama";
        this.state = {
            films: []
        };
        this.buildFilmsList = this.buildFilmsList.bind(this);
        this.getFilmsData = this.getFilmsData.bind(this);
    }

    getFilmsData() {
        const quantity = 5;
        console.log("getFilmsData()");
        let adressCharts = `charts/${this.props.chartType}/rating/desc/`;
        let adressGenre = `genre/${this.props.genreType}/`;
        let adress = adressCharts;
        console.log("adressInitial =", adress);
        axios.get(`http://localhost:3002/${adress}${quantity}`)
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


    };

    buildFilmsList(filmsList) {
        console.log('buildFilmsList ()');
        this.setState({
            films: filmsList
        });
    };

    componentDidMount() {
        console.log("componentDidMount()");
        this.getFilmsData();
        this.buildFilmsList();
    }

    componentDidUpdate(prevProps, adressCharts) {

        if (prevProps.chartType !== this.props.chartType) {
            let adress = adressCharts;
            this.getFilmsData(adress);
            this.buildFilmsList();
            console.log("adressUpdateCharts =", adress);
        }
        console.log("genreType =", this.props.genreType);

    }

    render() {
        const {films} = this.state;
        console.log('render()');
        return <div className="nn-b_cards bg-1">{films}</div>
    }

}

export default Card;

