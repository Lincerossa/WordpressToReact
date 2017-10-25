import React from 'react'
import { Link } from 'react-router-dom'     

import style from './Posts.scss'

const Posts = ({ posts }) => {

  console.log(posts)

  

  const POSTS = posts.data || posts

  return(
    <div> 
    tutti i posts:

    {
      POSTS && POSTS.length > 0 &&
      POSTS.map( (post, key) => {
        return <p><Link key={key} to={`/post/${post.slug}`}>{post.title.rendered}</Link></p>
      })

    }

    
    </div>
  )

}


export default Posts