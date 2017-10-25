import React from 'react'
import { Link } from 'react-router-dom'     

import { category } from './Category.scss'

const Category = ({ category }) => {
  return(
    <div> 

    <Link to={`/categories`}>vai alle categorie</Link>
    <Link to={`/posts`}>vai ai posts</Link>
    </div>
  )
}

export default Category
