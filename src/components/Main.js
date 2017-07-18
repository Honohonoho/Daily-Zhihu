import React, { Component } from 'react'
import '../css/Main.scss'
import Stories from './Stories'

class Main extends Component {
  render(){
    return(
      <div className="main">
          <div className="news">
            news
            <img src="" alt=""/>
            <p></p>
          </div>
          <Stories />
      </div>
    )
  }
}
export default Main