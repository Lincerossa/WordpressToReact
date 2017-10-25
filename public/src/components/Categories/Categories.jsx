import React from 'react'
import { Link } from 'react-router-dom'     

import { categories } from './Categories.scss'

const Categories = ({ categories }) => {

  const cat = categories.data || categories

  return(
    <div> 
    tutte le categories:
    {
      cat && cat.length > 0 &&
      cat.map ( (category, key) => <p><Link 
          key={key} 
          to={`/category/${category.slug}`}
        >{category.name}</Link></p>
      )
    }
    
    </div>
  )
}

export default Categories
