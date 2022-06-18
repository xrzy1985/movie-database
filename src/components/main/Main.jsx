import React, { useEffect, useState } from 'react';
import Movies from '../movies/movies';
import MOVIE_LIST from '../../static/movies.json';
import './main.css';

const MOVIE = { "Poster": "N/A", "Type": "movie", "imdbID": "" };
let _movies = [];


export default function Main() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        for (let i = 0, iLen = MOVIE_LIST.length; i < iLen; i++) {
            const title = MOVIE_LIST[i].slice(0, -5).replace('\"', '');
            const year = title.includes('(') && title.includes(')') ? title.slice(title.indexOf('(')) : '';
            _movies.push({...MOVIE, Title: title.replace(' ' + year, ''), NotFound: 'https://via.placeholder.com/400', Year: year });
        }
        setMovies([ ..._movies ]);
        _movies.length = 0;
    }, []);
    
    if (movies.length) {
        return (
            <React.Fragment>
                <Movies movies={movies}/>
            </React.Fragment>
        );
    }
}