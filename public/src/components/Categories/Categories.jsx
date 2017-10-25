import React from 'react'
import { Link } from 'react-router-dom'     

import { categories } from './Categories.scss'

const Categories = ({ categories, type }) => {
  console.log('CategoriesData---->',categories)
  console.log('CategoriesType---->',type)
  return(
    <div> 
    tutte le categories
    <Link to={`/category/first-category`}>vado ad una categoria</Link>
    </div>
  )
}

export default Categories
