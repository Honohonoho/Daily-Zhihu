import React, { Component } from 'react'
// import PROXYURL from '../ProxyUrl'

class LoadData extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount(){
    var path = 'http://localhost:3000/api/4/news/latest'
    console.log(path)
    fetch(path)
      .then(resopnse=>resopnse.json())
      .then(json=> {
        this.setState({
          isLoading: false,
          data: json
        })
      }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
  render(){
    return(
      <p>path</p>
    )
  }
}
export default LoadData