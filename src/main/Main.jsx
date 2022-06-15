import React from 'react';
import { Movies } from '../movies/movies';
import MOVIE_LIST from '../static/movies.json';
import './main.css';

const MOVIE = { "Poster": "N/A", "Type": "movie", "imdbID": "" };
const movies = [];

export default function Main() {

    for (let i = 0; i < MOVIE_LIST.length; i++) {
        const title = MOVIE_LIST[i].slice(0, -5).replace('\"', '');
        const year = title.includes('(') && title.includes(')') ? title.slice(title.indexOf('(')) : '';
        movies.push({...MOVIE, Title: title.replace(' ' + year, ''), NotFound: 'https://via.placeholder.com/400', Year: year });
    }

    return (
        <React.Fragment>
            <Movies movies={movies}/>
        </React.Fragment>
    );
}
