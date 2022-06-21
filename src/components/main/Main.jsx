import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import Movies from '../movies/movies';
import './main.css';

const MOVIE = { "Poster": "N/A", "Type": "movie", "imdbID": "" };
let _movies = [];


export default function Main(props) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ movies, setMovies ] = useState([]);
    const [ rawData, setRawData ] = useState('');
    const moviesCollectionRef = collection(db, 'movies');
    
    useEffect(() => {
        const getMoviesFromFirestore = async () => {
            const data = await getDocs(moviesCollectionRef);
            setRawData(data.docs.map(d => ({...d.data(), id: d.id})));
            setIsLoading(true);
        }
      
        getMoviesFromFirestore();
    }, []);
    
    
    if (isLoading) {
        if (((rawData || [])[0] || {}).list || '') {
            const raw = JSON.parse(((rawData || [])[0] || {}).list);
            _movies.length = 0;
            for (let i = 0, iLen = raw.length; i < iLen; i++) {
                const title = raw[i].slice(0, -5).replace('\"', '');
                const year = title.includes('(') && title.includes(')') ? title.slice(title.indexOf('(')) : '';
                _movies.push({...MOVIE, Title: title.replace(' ' + year, ''), NotFound: 'https://via.placeholder.com/400', Year: year });
            }
            setMovies([ ..._movies ]);
            _movies.length = 0;
            setIsLoading(false);
        }
    } else {
        return (
            <React.Fragment>
                <Movies movies={props.term !== '' ? filterMovies(props.term) : movies}/>
            </React.Fragment>
        );
    }

    function filterMovies(term) {
        return movies.filter(m => m.Title.toLowerCase().includes(props.term) || m.Year.toLowerCase().includes(props.term));
    }
}