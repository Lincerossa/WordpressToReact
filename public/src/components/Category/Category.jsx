import React from 'react'
import { Link } from 'react-router-dom'     

import { category } from './Category.scss'

const Category = ({ category, type }) => {
  console.log('CategoryData---->',category)
  console.log('CategoryType---->',type)
  return(
    <div> 
    singolo Category
    </div>
  )
}

export default Category
