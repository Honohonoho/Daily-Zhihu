import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Download from './components/Download'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Download />
        <div className="main">
          main
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default App;
