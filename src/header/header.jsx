import React from 'react';

import './header.css';

const title = 'Local Movie DB';

function Header() {
    return (
        <div className="container">
            <div className="con">
                <h3 className="title">{title}</h3>
                <div className="input-group mb-3">
                    <input onChange={() => {}} type="search" className="form-control" placeholder="Search for a movie" aria-label="movie search"></input>
                    <button onClick={() => {}} className="btn btn-outline-dark btn-dark" type="button" id="button-addon2">
                        <img src="search.svg" width="30" height="30" className="d-inline-block align-top" alt="Search"></img>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Header;