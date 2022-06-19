import React from 'react';
import { Movie } from '../movie/movie';
import { MovieNotFound } from '../movie/movieNotFound';

export default function Movies(props) {
    return props.movies?.length ?
        props.movies.map((m, index) => { return <Movie key={index} movie={m}/> }) : <MovieNotFound />;
}
