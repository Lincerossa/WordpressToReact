import React from 'react'

import style from './Post.scss'

const Post = ({ posts }) => {

  return(
    <div> 
    {
      posts &&
      posts.map( (post, key) => {
        return <div key={key} className={style.post}>{post.rendered}</div>
      })
      
    }
    </div>
  )

}


export default Post