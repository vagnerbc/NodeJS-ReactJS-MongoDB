import React from 'react';
import './App.css';
import HeaderBlog from './components/header/header'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes'

function App() {
  return(
    <Router>
      <div className="App">
        <HeaderBlog />
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
