import React from 'react';
import Http from '../../rest/Http';
import Movies from '../movies/movies';
import MOVIE_LIST from '../../static/movies.json';
import './main.css';

const MOVIE = { "Poster": "N/A", "Type": "movie", "imdbID": "" };
const movies = [];

export default function Main() {
    for (let i = 0, iLen = MOVIE_LIST.length; i < iLen; i++) {
        const title = MOVIE_LIST[i].slice(0, -5).replace('\"', '');
        const year = title.includes('(') && title.includes(')') ? title.slice(title.indexOf('(')) : '';
        movies.push({...MOVIE, Title: title.replace(' ' + year, ''), NotFound: 'https://via.placeholder.com/400', Year: year });
    }

    return (
        <React.Fragment>
            <Http request={{url: 'https://jsonplaceholder.typicode.com/users', method: 'GET'}} />
            {/* Http({{ request: { url: '', method: '' } }}); */}
            <Movies movies={movies}/>
        </React.Fragment>
    );
}
