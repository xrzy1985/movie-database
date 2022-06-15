import React from 'react';
import { Movie } from '../movie/movie';

export const Movies = (props) =>{
    return props.movies.map((m, index) => {
        return <Movie key={index} movie={m}/>
    });
}
