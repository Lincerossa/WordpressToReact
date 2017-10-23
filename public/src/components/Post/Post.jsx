import React from 'react'

import style from './Post.scss'

const Post = ({ posts }) => {

  return(
    <div> 
    {
      posts &&
      posts.map( (post, index) => {
        return <div key={'post-' + index} className={style.post}>

ciao
        </div>
      })
      
    }
    </div>
  )

}


export default Post