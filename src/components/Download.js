import React, { Component } from 'react'
import '../css/Download.scss'
import phone_sample from '../image/phone_sample.png'
import slogan from '../image/slogan.png'
import erweima from '../image/erweima.png'
import iphone_logo from '../image/iphone_logo.png'
import android_logo from '../image/android_logo.png'

class Download extends Component {
  render(){
    return(
      <div className="download">
        <div className="container">
          <div className="wrap-left">
            <img src={phone_sample} alt=""/>
          </div>
          <div className="wrap-right">
            <div className="content">
              <img src={slogan} alt=""/>
              <p className="text">在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</p>
            </div>
            <div className="address">
              <div className="code">
                <img src={erweima} alt=""/>
              </div>
              <div className="version">
                <div className="iphone">
                  <span className="icon"><img src={iphone_logo} alt=""/></span>
                  <span className="text">iOS 版</span>
                </div>
                <div className="android">
                  <span className="icon"><img src={android_logo} alt=""/></span>
                  <span className="text">Android 版</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Download