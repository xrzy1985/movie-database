import React, { useEffect, useState } from 'react';

import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Http from './rest/Http.jsx';
import Main from './main/Main.jsx';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const containers = {header: {"height": "20vh"}, footer: {"height": "10vh"}};

  useEffect(() => {
    Http('Spiderman');
  }, []);

  return (
    <React.Fragment>
    <div className="parent">
        <div style={containers.header} id="shared">
          <Header/>
        </div>
        <div className="main-section">
          <Main/>
        </div>
        <div style={containers.footer} id="shared">
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
