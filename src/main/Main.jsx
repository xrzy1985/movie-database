import React from 'react';
import { Movies } from '../movies/movies';
import './main.css';

const movie = { "Poster": "N/A", "Title": "Spiderman", "Type": "movie", "Year": "2010", "imdbID": "tt1785572"};
const movies = [];
for (let i = 0; i < 20; i++) {
    movies.push({...movie, NotFound: 'https://via.placeholder.com/400'});
}

export default function Main() {
    return (
        <React.Fragment>
            <Movies movies={movies}/>
        </React.Fragment>
    );
}