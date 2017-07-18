import React, { Component } from 'react'
import '../css/Main.scss'
import Stories from './Stories'

class Main extends Component {
  render(){
    return(
      <div className="main">
        <div className="title">
          <p className="content">浏览内容</p>
          <p className="latest">最新内容</p>
        </div>
        <Stories />
      </div>
    )
  }
}
export default Main