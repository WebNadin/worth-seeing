/**
 * Created by Nadin on 26.11.2018.
 */
import React from 'react';
import '../scss/main.scss';

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genreType: 'action',
            genres: [
                {
                    title: "боевик",
                    id: "action"
                },
                {
                    title: "детектив",
                    id: "crime"
                },
                {
                    title: "драма",
                    id: "drama"
                },
                {
                    title: "исторический",
                    id: "history"
                },
                {
                    title: "комедия",
                    id: "comedy"
                },
                {
                    title: "мистика",
                    id: "mystery"
                },
                {
                    title: "мультфильм",
                    id: "animation"
                },
                {
                    title: "вестерн",
                    id: "western"
                },
                {
                    title: "военный",
                    id: "war"
                },
                {
                    title: "мюзикл",
                    id: "musical"
                },
                {
                    title: "нуар",
                    id: "film-noir"
                },
                {
                    title: "о музыке",
                    id: "music"
                },
                {
                    title: "приключения",
                    id: "adventure"
                },
                {
                    title: "роман",
                    id: "romance"
                },
                {
                    title: "семейный",
                    id: "family"
                },
                {
                    title: "спорт",
                    id: "sport"
                },
                {
                    title: "триллер",
                    id: "thriller"
                },
                {
                    title: "ужасы",
                    id: "horror"
                },
                {
                    title: "фантастика, фентези",
                    id: "fantasy"
                },
                {
                    title: "научная фантастика",
                    id: "sci-fi"
                },
                {
                    title: "биографический",
                    id: "biography"
                },
                {
                    title: "документальный",
                    id: "documentary"
                }
            ]
        };
    }

    render() {
        let genresList = this.state.genres.map((genre, i) => {
            if (i === this.state.genres.length - 1 || i === this.state.genres.length - 2 || i === this.state.genres.length - 3 || i === this.state.genres.length - 4) {
                var specialWidth = ' _long-' + genre.id;
            }
            else var specialWidth = '';

            return (

                <div key={i} className={"nn-b_buttons__item" +(specialWidth)}  onClick={() => { this.props.updateGenreType(genre.id)}}>
                    <div className="nn-button">
                        <div className="nn-button__title">{genre.title}</div>
                    </div>
                </div>
            )
        });
        return <div className="nn-b_buttons">{genresList}</div>;
    };

}

export default Filters;

