import React from 'react';
import {Spacer} from '../spacer/spacer';
import './movie.css';

export const Movie = () => {
  const movie = { "Poster": "N/A", "Title": "Spiderman", "Type": "movie", "Year": "2010", "imdbID": "tt1785572"};
  const movies = [];
  for (let i = 0; i < 20; i++) {
    movies.push(movie);
  }

  const IMG_STYLES = { width: "auto", maxWidth: "100%", height: "auto", borderRadius: "2vw" };
  const H5_STYLES = { "textAlign": "center"};

  return (
    <React.Fragment>
    <div className="main">
      {
        movies.map((m, index) => {
          const {Poster, Title, Type, Year, NotFound} = {...movie, NotFound: 'https://via.placeholder.com/400'};
          return (
            <>
              <Spacer/>
              <div className="card.main text-white bg-secondary" style={IMG_STYLES}>
                <div className="card-body">
                    <h5 className="card-title" style={H5_STYLES}>{Title} ({Year})</h5>
                </div>
                <img className="card-img-top" src={Poster === 'N/A' ? NotFound : Poster} alt={Title}></img>
                <div className="card-body">
                    <h5 className="card-title" style={H5_STYLES}>{Type}</h5>
                </div>
              </div>
              <Spacer/>
            </>
          );
        })
      }
    </div>
    </React.Fragment>
  );
}