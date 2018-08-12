import React, { Component } from 'react';
import {
  HashRouter,
} from 'react-router-dom'
//import './App.css';
import Root from './pages/root'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Root />
      </HashRouter>
    );
  }
}

export default App;
