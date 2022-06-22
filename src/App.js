import React, { useEffect, useState } from 'react';
// import useHTTP from './rest/Http.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Main from './components/main/Main.jsx';
import './App.css';

const App = () => {
  /** @todo implement progress bar based on isLoading */
  const [ isLoading, setIsLoading ] = useState(false);
  const [ term, setTerm ] = useState('');

  return (
    <React.Fragment>
      <div className="parent">
        <div className="header-section bg-primary" id="shared">
          <Header setTerm={setTerm} term={term}/>
        </div>
        <div className="main-section">
          {!isLoading ?
            <React.Fragment>
              <Main term={term}/>
            </React.Fragment> :
            <React.Fragment>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{"width": "100%"}}></div>
              </div>
            </React.Fragment>
          }
        </div>
        <div className="footer-section bg-primary" id="shared">
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
