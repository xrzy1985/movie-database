import { render } from '@testing-library/react';
import MOVIE_LIST from '../../static/movies.json';
import Main from '../main/Main.jsx';
// import Movies from '../movies/movies.jsx';

let container = [];

for (let i = 0, iLen = MOVIE_LIST.length; i < iLen; i++) {
  const title = MOVIE_LIST[i].slice(0, -5).replace('\"', '');
  const year = title.includes('(') && title.includes(')') ? title.slice(title.indexOf('(')) : '';
  container.push({...{"Poster": "N/A", "Type": "movie", "imdbID": ""}, Title: title.replace(' ' + year, ''), NotFound: 'https://via.placeholder.com/400', Year: year });
}

test('Tests the Main component', () => {
  render(<Main />);
  expect(Main).toBeDefined();
  expect(container.length).toBeGreaterThan(0);
  container.forEach(movie => {
    expect(movie && movie.Poster && movie.Type && movie.Title && movie.NotFound && movie.Year).toBeDefined();
  });
  // render(<Movies/>);
  // expect(Movies).toBeDefined();
});
