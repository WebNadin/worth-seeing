/**
 * Created by Nadin on 26.11.2018.
 */
import React, { Component } from 'react';
//import React from 'react';
import axios from 'axios';
import avatar from '../img/min/avatar.jpg';
class Card extends Component {
    constructor(films) {
        super();
        this.state = {
            films: []
        }
    }

    componentDidMount(films) {
        const quantity = 3;
        axios.get(`http://localhost:3002/charts/most_popular_movies/rating/desc/${quantity}`)
            .then(res => {
                for (var i = 0; i < res.data.length; i++) {
                    const movies = res.data[i].name;
                    var films = [];
                     this.setState({films: movies})
                    console.log('film' + i + ' = ');
                    console.log(movies);
                }

                console.log(films);

            });
    }

    render() {
        return (
            <div className="card-group col-12 col-sm-4 mb-1 mb-sm-4 text-center">
                <div className="card _pointer _no-shadow-hover _no-pointer-hover mb-0">
                    <div className="card-body">

                        <img src={avatar} alt="" className="card-img"/>
                        <p className="card-text">
                            test text
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="nn_card__raiting"></div>
                        <div className="nn_card__year"></div>
                    </div>
                </div>
            </div>
        );
    }
}


/*const cardMin = (props) => {
 return (
 <div className="card-group col-12 col-sm-4 mb-1 mb-sm-4 text-center">
 <div className="card _pointer _no-shadow-hover _no-pointer-hover mb-0">
 <div className="card-body">

 <img class='' src='https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL50.jpg' alt="" className="card-img"/>
 <p className="card-text">
 {props.name}
 </p>
 </div>
 <div className="card-footer">
 <div className="nn_card__raiting"></div>
 <div className="nn_card__year"></div>
 </div>
 </div>
 </div>
 );
 };*/

export default Card;

