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
    }
  }

  componentWillMount(){
    get(api.getPosts)
      .then( (posts)=>{
        this.setState({
          posts: posts,
        }) 
      })

  }

  render(){
    const { posts }  =  this.state || this.props
    const POSTS = posts.data || posts

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