import React, {Component} from 'react'
import { get } from 'axios'

import style from './Posts.scss'

class Posts extends Component {


  constructor(props){

    super(props)

    this.state = {
      posts: []
    }

  }


  fetchData(){

    const ENDPOINT = 'http://192.168.33.10/wordpress/wp-json/wp/v2/posts'

    get(ENDPOINT)
      .then( ({ data }) => {
        this.setState({
          posts: data
        })
      })
      .catch( (error) =>{
        console.log(error);
      });

  }

  componentDidMount(){
    this.fetchData()
  }

  render(){

    return(
      <div> 
      {
        this.state.posts &&
        this.state.posts.map( post => {

          return <div className={style.post}> { post.title.rendered} </div>
        })
        
      }
      </div>
    )}

  }


export default Posts