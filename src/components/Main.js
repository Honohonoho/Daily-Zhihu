import React, { Component } from 'react'
import '../css/Main.scss'
import LoadData from './LoadData'

class Main extends Component {
  render(){
    return(
      <div className="main">
          <div className="news">
            news
            <img src="" alt=""/>
            <p></p>
          </div>
          <LoadData />
      </div>
    )
  }
}
export default Main