import React from 'react';
import { Movie } from '../movie/movie';
import { MovieNotFound } from '../movie/movieNotFound';

export const Movies = (props) =>{
    return props.movies?.length ? props.movies.map((m, index) => { return <Movie key={index} movie={m}/> }) : <MovieNotFound />
}
