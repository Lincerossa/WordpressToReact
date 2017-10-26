import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

import { get } from 'axios'
import style from './Posts.scss'
import api from '../../api'

class Posts extends Component{

  constructor(props){

    console.log(props)
    super(props)
    this.state = {
      posts :"",
      client: false
    }

  }

  componentWillMount(props){
      
    get(api.getPosts)
      .then( (posts)=>{
        console.log("ecco il risultato della chiamata client",posts.data)
        this.setState({
          posts: posts.data,
          client: true
        }) 
      })

  }

  componentShouldUpdate(nextProps){
    console.log('comp should upd', props)
  }

  render(){
    let posts;
    if(this.state.client){
      posts =  this.state.posts
    } else {
      posts = this.props.posts
    }
    const POSTS = posts

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