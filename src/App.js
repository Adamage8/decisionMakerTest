import React, { Component } from 'react';
import './App.css';
import DecisionMaker from './DecisionMaker'

class App extends Component {

  render() {
    return (
      <div className="App">
        <DecisionMaker rows="1" cols="2" />
      </div>
    );
  }
}

export default App;
