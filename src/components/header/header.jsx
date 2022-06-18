import React, { useState } from 'react';
import './header.css';

export default function Header() {
    const title = 'Local Movie Database';
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="container">
            <div className="con">
                <h3 className="title">{title}</h3>
                <div className="input-group mb-3">
                    <input aria-label="movie search input field"
                            className="form-control"
                            onChange={e => setSearchTerm((e.target.value).toLowerCase())}
                            placeholder="Search the database of movies"
                            type="search"
                            value={searchTerm}></input>
                    <button className="btn btn-outline-dark btn-dark"
                            onClick={() => {
                                // implement button search capabilities
                            }}
                            type="button">
                        <img src="assets/search.svg" width="30" height="30" className="d-inline-block align-top" alt="Search"></img>
                    </button>
                </div>
            </div>
        </div>
     );
}