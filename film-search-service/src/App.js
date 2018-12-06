import React, { Component } from 'react';
import './App.css';
import Card from './Cards/Card';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="nn_col nn_col_1">
                    <h1>Не знаешь, что посмотреть?</h1>
                    {/*<p>У нас ты найдешь фильмы, которые заслуживают внимания.</p>
                     <p> Новинки и старое доброе кино согласно рейтингу imdb, а также наши собственные рекомендации.</p>
                     */}
                </div>
                <div className="nn_container bg-test-5">

                    <Card />

                </div>
            </div>
        );
    }
}

export default App;

/*
 class MostPopularMovies extends  Component{
 constructor(){
 super();
 this.state = {
 films: []
 }
 }
 }

 export MostPopularMovies;*/


/*
 render() {
 return (
 <div className="App">
 <h1>Не знаешь, что посмотреть?</h1>
 <p>У нас ты найдешь фильмы, которые заслуживают внимания.</p>
 <p> Новинки и старое доброе кино согласно рейтингу imdb, а также наши собственные рекомендации.</p>
 <CardMin name="Аватар"/>
 </div>
 );
 }*/


/*
 const quantity = 3;
 axios.get(`http://localhost:3002/charts/most_popular_movies/rating/desc/${quantity}`)
 .then(res => {
 const films = res.data;
 console.log('films = ');
 console.log(films);
 });*/
