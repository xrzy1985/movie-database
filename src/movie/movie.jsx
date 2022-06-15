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
          <div className="card-body">
              <h5 className="card-title" id="title">{Title} {Year}</h5>
          </div>
          <img className="card-img-top" src={Poster === 'N/A' ? NotFound : Poster} alt={Title}></img>
          <div className="card-body">
              <h5 className="card-title" id="title">{Type}</h5>
          </div>
        </div>
        <Spacer/>
      </div>
    </>
  );
}