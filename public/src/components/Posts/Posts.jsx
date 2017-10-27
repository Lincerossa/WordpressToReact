import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

import { get } from 'axios'
import style from './Posts.scss'
import api from '../../api'

class Posts extends Component{

  constructor(props){

    super(props)
    this.state = {
      posts :"",
      client: false
    }

  }

  async componentWillMount(){

    const posts  = await get(api.getPosts)

    if( JSON.stringify(posts.data) !== JSON.stringify(this.props.posts) ){

      this.setState({
        posts: posts.data,
        client: true
      })
       
    }
  
  }

  render(){

    const POSTS = this.state.client ? this.state.posts : this.props.posts

    return(
      <div> 
      tutti i posts:

      {
        POSTS && POSTS.length > 0 &&
        POSTS.map( (post, key) => {
          if(post.slug && post.title && post.title.rendered){
            return <p><Link key={key} to={`/post/${post.slug}`}>{post.title.rendered}</Link></p>
          }
        })

      }

      
      </div>
    )
  } 
}


export default Posts