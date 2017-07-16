import React, { Component } from 'react'
import top_logo from '../image/top_logo.png'
import '../css/Header.scss'

class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="container">
          <div className="logo">
            <a href="">
              <img src={top_logo} alt="知乎日报"/>
            </a>
          </div>
          <div className="top-nav">
            <a href=""><span>App 下载</span></a>
            <a href=""><span>浏览内容</span></a>
          </div>
        </div>
      </div>
    )
  }
}
export default Header