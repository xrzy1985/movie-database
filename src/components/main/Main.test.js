import { render } from '@testing-library/react';
import MOVIE_LIST from '../../static/movies.json';
import Main from '../main/Main.jsx';
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

let container = [];

let isLoading = false;
let movies = [];
let rawData = {};
let term = '';

for (let i = 0, iLen = MOVIE_LIST.length; i < iLen; i++) {
  const title = MOVIE_LIST[i].slice(0, -5).replace('\"', '');
  const year = title.includes('(') && title.includes(')') ? title.slice(title.indexOf('(')) : '';
  container.push({...{"Poster": "N/A", "Type": "movie", "imdbID": ""}, Title: title.replace(' ' + year, ''), NotFound: 'https://via.placeholder.com/400', Year: year });
}

// test('add numbers async', done => {
  // render(<Main term={term} />);
  // const firebase = initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));
  // const db = getFirestore(firebase);
  // getMoviesFromFirestore(10, 5, result => {
  //   expect(result).toBe(15);
  //   done();
  // })
// })

test('Tests the Main component', () => {
  // render(<Main term={term} />);
  expect(container.length).toBeGreaterThan(0);
  container.forEach(movie => {
    expect(movie && movie.Poster && movie.Type && movie.Title && movie.NotFound && movie.Year).toBeDefined();
  });
});