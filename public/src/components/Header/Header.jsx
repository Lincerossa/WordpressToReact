import React from 'react'
import { Link } from 'react-router-dom'   

import Hamburger from '../Hamburger'

import style from './Header.scss'

const Header = ({ categories })=> {
		
	return(
	  <div className={style.Header}>
	  	<Link to='/'><div className={style.HeaderLogo}>qui va logooo</div></Link>
      <div className={style.HeaderHamburger}>
		  	{
		  		categories &&
		  		<Hamburger categories={categories} />
		  	}
      </div>
	  </div>
	)


}
export default Header
