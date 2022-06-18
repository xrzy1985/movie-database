import React from 'react';

export const IMG = (props) => {
  return (
    <React.Fragment>
      <img className="card-img-top" src={props.source} alt={props.Title}></img>
    </React.Fragment>
  );
}