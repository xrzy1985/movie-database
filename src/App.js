import React from 'react';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Main from './components/main/Main.jsx';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <div className="parent">
        <div className="header-section" id="shared">
          <Header/>
        </div>
        <div className="main-section">
          <Main/>
        </div>
        <div className="footer-section" id="shared">
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
