import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Download from './components/Download'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Download />
        <Main />
        <div className="footer">
          footer
        </div>
      </div>
    )
  }
}

export default App;
