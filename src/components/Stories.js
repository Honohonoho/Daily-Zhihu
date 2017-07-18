import React, { Component } from 'react'
// import LoadData from './LoadData'
import LocalUrl from './LocalUrl'

class Stories extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      imgUrl: []
    }
  }
  componentDidMount(){
    let path = LocalUrl + '/api/4/news/latest'
    // console.log(path)
    fetch(path)
      .then( resopnse => {
        return resopnse.json()
      })
      .then( data => {
        this.getImgUrl(data)
      })
      .catch(e => {
        console.log('Oops, error', e)
      })

  }
  getImgUrl(data){
    let storiesList = data.stories
    let imgUrlList = []
    storiesList.map((item) => {
      imgUrlList.push(item.images[0])
    })
    this.setState({imgUrl: imgUrlList})
    console.log(this.state.imgUrl)
  }

  render(){
    return(
      <img src={this.state.imgUrl[0]} alt=""/>
    )
  }
}
export default Stories

