import React, { Component } from 'react'	
import { connect } from 'react-redux'
import * as action from '../../actions'

import { hamburger, hamburgerIcon, hamburgerMenu } from './Hamburger.scss'
import Menu from '../Menu'

const Hamburger = props => {
  console.log("hamburger props",props)
  return(
    <div className={hamburger}>
      <div className={hamburgerIcon} onClick={props.handleClick} ></div>
      {
        props.categories && props.isOpen &&
        <div className={hamburgerMenu}>
          <Menu categories={props.categories} onClick={props.handleClick} />
        </div>
      }
    </div>
  )
}


const mapStateToProps = state => {
  return {
    isOpen: state.hamburgerIsOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(action.hamburgerOpen(false))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hamburger)

