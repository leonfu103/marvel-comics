import React, { Component } from 'react';
// import './App.css';
import { Router, browserHistory } from 'react-router'
import Routes from './components/router'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={Routes} />
    )
  }
}

export default App;
