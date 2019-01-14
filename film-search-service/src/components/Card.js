/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../scss/main.scss';
import stars from '../img/stars.png';
import starsGray from '../img/stars-gray.png';

export class Card extends Component {

    constructor(chartType) {
        super(chartType);
        this.state = {
            films: [],
            chartType: this.props.chartType
        };
    }

    getChart = () => {
        const quantity = 2;
        let type = this.state.chartType;
        axios.get(`http://localhost:3002/charts/${type}/rating/desc/${quantity}`)
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
                        zIndex: 10,
                        overflow: 'hidden',
                        width: `${rating}%`
                    };
                    return (
                        <div key={index} className="nn-col_4__item">
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

    componentDidMount() {
        this.getChart();
        //this.getChart;
        console.log('this.state.chartType Did = ');
        console.log(this.props.chartType);
    }

    componentWillReceiveProps(nextProps) {
        let type = nextProps.chartType;
        console.log('nextProps.chartType = ');
        console.log(nextProps.chartType);
        //this.getChart();
        this.forceUpdate();
    }


    /*componentWillReceiveProps(nextProps) {
     const quantity = 5;
     axios.get(`http://localhost:3002/charts/${nextProps.chartType}/rating/desc/${quantity}`)
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
     zIndex: 10,
     overflow: 'hidden',
     width: `${rating}%`
     };
     return (
     <div key={index} className="nn-col_4__item">
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
     })
     }*/

    render() {
        const {films} = this.state;
        return <div className="nn-col nn-col_4 bg-1">{films}</div>
    }

}

export default Card;

