import React, { Component } from 'react';
import './App.css';
import HeaderBlog from './components/header/header'
import Main from './pages/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBlog />
        <Main />
      </div>
    );
  }
}

export default App;
