import React, { Component } from 'react'
import LocalUrl from './LocalUrl'

class LoadData extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      data: {}
    }
  }
  componentDidMount(){
    var path = LocalUrl + '/api/4/news/latest'
    // console.log(path)
    fetch(path)
      .then( resopnse => {
        return resopnse.json()
      })
      .then( data => {
        this.setState({
          isLoading: false,
          data: data
        })
        this.getImgUrl(this.state.data)
      })
      .catch(e => {
        console.log('Oops, error', e)
      })
  }

  getImgUrl(data){
    let storiesList = data.stories;
    let imgItems = storiesList.map((item) => {
      <img src={item.images[0]} alt=""/>
    })
    console.log(imgItems)
    return imgItems
  } 
  render(){
    return(
      <p>{img}</p>
    )
  }
}
export default LoadData