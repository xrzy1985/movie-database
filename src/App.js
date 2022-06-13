import React, { useEffect } from 'react';

import Http from './rest/Http.jsx';
import Main from './main/Main.jsx';
import './App.css';

const App = () => {
  const style = { header: {height: "20vh"}, h3: {"padding": "5vh 0", "textAlign": "center"}, a: { margin: "0 0 0 2vw" } };
  const cont = { 'width': '100vw', 'height': '100vh' };

  useEffect(() => {
    Http('Spiderman');
  }, []);

  return (
    <React.Fragment>
      <div style={cont}>
        <div className="container-fluid" style={style.header}>
          <h3 style={style.h3}>Movieland</h3>
          <div className="input-group mb-3">
            <input onChange={() => {}} type="search" className="form-control" placeholder="Search for a movie" aria-label="movie search"></input>
            <button onClick={() => {}} className="btn btn-outline-dark btn-primary" type="button" id="button-addon2">
              <img src="search.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            </button>
          </div>
        </div>
        <Main></Main>
        {/* <Footer></Footer> */}
      </div>
    </React.Fragment>
  );
}

export default App;
