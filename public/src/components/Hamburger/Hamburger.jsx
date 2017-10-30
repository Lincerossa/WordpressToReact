import React, { Component } from 'react'	

import { hamburger, hamburgerIcon, hamburgerMenu } from './Hamburger.scss'
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
	  	<div className={hamburger}>
        <div className={hamburgerIcon} onClick={this.handleClick} >
            asd
        </div>

		    {
		    	categories && isOpen &&
          <div className={hamburgerMenu}>
            <Menu categories={categories} onClick={this.handleClick} />
          </div>
		    }
	    </div>

		)
  }
}

export default Hamburger
