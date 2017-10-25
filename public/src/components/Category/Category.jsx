import React from 'react'
import { Link } from 'react-router-dom'     

import { category } from './Category.scss'

const Category = ({ category, type }) => {
  return(
    <div> 
    singolo Category.
    <Link 
          to={`/categories`}
        >vai alle categorie</Link>
    </div>
  )
}

export default Category
