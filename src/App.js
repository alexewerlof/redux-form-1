import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm.js';

function iAmHandlingSubmit(data) {
  console.dir(data);
  return new Promise(resolve => setTimeout(resolve, 2000));
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React mate!</h2>
        </div>
        <SimpleForm onSubmit={iAmHandlingSubmit}></SimpleForm>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
