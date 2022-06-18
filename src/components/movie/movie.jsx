import React from 'react';
import { Spacer } from '../spacer/spacer';
import './movie.css';

export const Movie = (props) => {
  const { Title, Poster, NotFound, Type, Year } = {...props.movie};
  return (
    <>
      <div className="main">
        <Spacer/>
        <div className="card.main text-white bg-secondary" id="img">
          <MovieCard details={[Title, Year]}/>
          <img className="card-img-top" src={Poster === 'N/A' ? NotFound : Poster} alt={Title}></img>
          <MovieCard details={Type} />
        </div>
        <Spacer/>
      </div>
    </>
  );
}

function MovieCard(props) {
  return (
    <div className="card-body">
      <h5 className="card-title" id="title">{Details(props)}</h5>
    </div>
  );
}

function Details(props) {
  return typeof props.details !== "string" ? serializeTitle(props.details) : props.details;
}

function serializeTitle(props) {
  let _title = '';
  for (let i = 0, iLen = props.length; i < iLen; i++) {
    _title += i === iLen - 1 ? props[i] : props[i] + ' ';
  }
  return _title;
}