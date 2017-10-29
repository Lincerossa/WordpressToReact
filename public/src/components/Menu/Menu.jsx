import React from 'react'
import { Link } from 'react-router-dom'     

import { menu, menuCategory, menuCategories, menuClose } from './Menu.scss'

const Menu = ({ categories, onClick }) => {

  return(
    <div className={menu}>
      <div className={menuCategories}>
      {
        categories.map( (category, key) =>
          <Link 
            key={key} 
            to={`/category/${category.slug}`} 
            className={menuCategory} 
            onClick={onClick}
          >{category.name}</Link>
        )
      }
      </div>
      <div className={menuClose} onClick={onClick}>X</div>
    </div>
  )
}

export default Menu
