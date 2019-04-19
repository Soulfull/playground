import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="component">
        <h1>{App.displayName || App.name}</h1>
        <div>Props:</div>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default App;
