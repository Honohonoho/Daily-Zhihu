import React, { Component } from 'react'
import LocalUrl from './LocalUrl'
import StoryDetail from './StoryDetail'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom' 
import '../css/Stories.scss'

class Stories extends Component {
  constructor(props){
    super(props)
    this.state = {
      storiesList: []
    }
  }
  componentDidMount(){
    let path = LocalUrl + '/api/4/news/latest'
    fetch(path)
      .then( resopnse => {
        return resopnse.json()
      })
      .then( data => {
        this.getStoryItem(data)
      })
      .catch( e => {
        console.log('Oops, error', e)
      })

  }
  getStoryItem(data){
    let stories = []
    data.stories.map( item => {
      return stories.push(item)
    })
    this.setState({storiesList: stories})
  }
  getStoryId(id){
    let path = '/story/' + id
    return path
  }

  render(){
    return(
      <div className="stories">
        {this.state.storiesList.map( (item,index) => {
          return(
            <div className="storyItem" key={index}>
              <Link to={this.getStoryId(item.id)} target="_blank"> {/* this.getStoryId(item.id) */}
                <img src={item.images[0]} alt=""/>
                <p className="title">{item.title}</p>
              </Link>
              <Route path="story/:storyId" component={StoryDetail}></Route>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Stories

