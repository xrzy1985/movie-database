import React, { useState } from 'react';
import useHTTP from './rest/Http.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Main from './components/main/Main.jsx';
import './App.css';

const App = () => {
  const { isLoading, resp } = useHTTP({url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET'});
  const [ term, setTerm ] = useState('');
  let count = 0;
  if (isLoading) {
    count = count + 1;
  }
  return (
    <React.Fragment>
      <div className="parent">
        <div className="header-section" id="shared">
          <Header setTerm={setTerm} term={term}/>
        </div>
        <div className="main-section">
          {!isLoading ?
            <>
              <Main/>
            </> :
            <>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={count}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{"width": "100%"}}></div>
              </div>
            </>
          }
        </div>
        <div className="footer-section" id="shared">
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
