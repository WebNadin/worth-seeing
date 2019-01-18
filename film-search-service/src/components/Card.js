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
        //this.chartType = "top_rated_tv";
        this.state = {
            films: []
            //chartType: "top_rated_tv"
            //chartType: this.props.chartType
        };
    }

    /*loadFilmsData(nextProps, prevState) {
     console.log('loadFilmsData () = ');
     console.log('this.props.chartType loadFilmsData = ');
     console.log(this.props.chartType);
     console.log('this.chartType loadFilmsData = ');
     console.log(this.chartType);
     const quantity = 5;
     if (nextProps.chartType) {
     this.chartType = nextProps.chartType;
     axios.get(`http://localhost:3002/charts/${this.chartType}/rating/desc/${quantity}`)
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
     console.log('films before = ');
     console.log(this.state.films);
     this.setState({
     films: filmsList
     });
     console.log('films after = ');
     console.log(this.state.films);
     });


     }

     }*/

    componentDidMount() {
        console.log('componentDidMount()');
        console.log('loadFilmsData () = ');
        console.log('this.props.chartType Did');
        console.log(this.props.chartType);
        console.log('this.chartType Did');
        console.log(this.chartType);
        const quantity = 5;

        //this.chartType = this.state.chartType;
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
                console.log('films before = ');
                console.log(this.state.films);
                this.setState({
                    films: filmsList
                });
                console.log('films after = ');
                console.log(this.state.films);
            });


        //this.loadFilmsData(this.chartType);
    }

    /*shouldComponentUpdate(nextProps) {
     console.log('shouldComponentUpdate()');
     this.chartType = nextProps.chartType;
     console.log("this.chartType after Update=");
     console.log(this.chartType);
     console.log("this.state.chartType =");
     console.log(this.state.chartType);
     return true;
     }*/

    componentDidUpdate() {
        console.log('componentDidUpdate()');
        //this.loadFilmsData(this.chartType);
    }

    render() {
        const {films} = this.state;
        console.log('render()');
        return <div className="nn-b_cards bg-1">{films}</div>
    }

}

export default Card;

