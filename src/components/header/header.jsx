import React, { useState } from 'react';
import './header.css';

export default function Header(props) {
    const title = 'Local Movie Database';
    const [ searchTerm, setSearchTerm ] = useState('');

    function handleSearchTerm(term) {
        setSearchTerm(term)
        props.setTerm(term);
    }

    return (
        <div className="container bg-primary">
            <div className="con">
                <h3 className="title">{title}</h3>
                <div className="input-group mb-3">
                    <input aria-label="movie search input field"
                            className="form-control"
                            onChange={e => handleSearchTerm((e.target.value).toLowerCase())}
                            placeholder="Search the database of movies"
                            type="search"
                            value={searchTerm}>
                    </input>
                </div>
            </div>
        </div>
    );
}