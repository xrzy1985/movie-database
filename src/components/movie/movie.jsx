import React from 'react';
import { IMG } from '../images/img';
import { Spacer } from '../spacer/spacer';
import './movie.css';

export const Movie = (props) => {
  const { Title, Poster, NotFound, Type, Year } = {...props.movie};
  return (
    <>
      <div className="main">
        <Spacer/>
        <div className="card.main text-white bg-secondary" id="img">
          <MovieDetails details={[Title, Year]}/>
          <IMG source={Poster === 'N/A' ? NotFound : Poster} alt={Title}/>
          <MovieDetails details={Type} />
        </div>
        <Spacer/>
      </div>
    </>
  );
}

/**
 * @function MovieDetails
 * @description to build out a bootstrap movie card title
 * @returns {React Fragment}
 */
function MovieDetails(props) {
  return (
    <React.Fragment>
      <div className="card-body">
        <h5 className="card-title" id="title">{Details(props.details)}</h5>
      </div>
    </React.Fragment>
  );
}

/**
 * @function Details
 * @description determine if the details need serialized
 * @returns {string}
 */
function Details(details) {
  return typeof details !== "string" ? serializeTitle(details) : details;
}

/**
 * @function serializeTitle
 * @param {array} details Relevant information pertaining to the movie being serialized
 * @description concatenate values into readable text
 * @returns {string}
 */
function serializeTitle(details) {
  let _title = '';
  for (let i = 0, iLen = details.length; i < iLen; i++) {
    _title += i === iLen - 1 ? details[i] : details[i] + ' ';
  }
  return _title;
}