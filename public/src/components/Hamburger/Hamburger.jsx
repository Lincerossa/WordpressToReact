import React, { Component } from 'react'	

import style from './Hamburger.scss'
import Menu from '../Menu'

class Hamburger extends Component {

  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){

  	const { categories } = this.props
    const { isOpen } = this.state

  	return(
	  	<div className={style.Hamburger}>
        <div className={style.HamburgerIcon} onClick={this.handleClick} >
          qui icona Hamburger
        </div>

		    {
		    	categories && isOpen &&
          <div className={style.HamburgerMenu}>
            <Menu categories={categories} onClick={this.handleClick} />
          </div>
		    }
	    </div>

		)
  }
}

export default Hamburger
