import React from 'react';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Main from './main/Main.jsx';
import './App.css';

const App = () => {

  return (
    <React.Fragment>
    <div className="parent">
        <div style={{"height": "20vh"}} id="shared">
          <Header/>
        </div>
        <div className="main-section">
          <Main/>
        </div>
        <div style={{"height": "10vh"}} id="shared">
          <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
