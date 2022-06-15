import React from 'react';
import { Movies } from '../movies/movies';
import MOVIE_LIST from '../static/movies.json';
import './main.css';

const movie = { "Poster": "N/A", "Title": "Spiderman", "Type": "movie", "Year": "2010", "imdbID": "tt1785572"};
const movies = [];
for (let i = 0; i < 20; i++) {
    movies.push({...movie, NotFound: 'https://via.placeholder.com/400'});
}

for (let i = 0; i < MOVIE_LIST.length; i++) {
    const _movie_ = MOVIE_LIST[i];
    console.log(_movie_.slice(0, -5));
  }

export default function Main() {
    return (
        <React.Fragment>
            <Movies movies={movies}/>
        </React.Fragment>
    );
}