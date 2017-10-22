import React, { Component } from 'react'
import { get } from 'axios'
import { Link } from 'react-router-dom'   

import Hamburger from '../Hamburger'

import style from './Header.scss'

class Header extends Component {


  constructor(props){

    super(props)

    this.state = {
      categories: []
    }

  }

  fetchData(){

    const ENDPOINT = 'http://192.168.33.10/wordpress/wp-json/wp/v2/categories'

    get(ENDPOINT)
      .then( ({ data }) => {
        this.setState({
          categories: data
        })
      })
      .catch( (error) =>{
        console.log(error);
      });

  }

  componentDidMount(){
    this.fetchData()
  }
		
	render(){
		return(
		  <div className={style.Header}>
		  	<Link to='/'><div className={style.HeaderLogo}>qui va logooo</div></Link>
        <div className={style.HeaderHamburger}>
  		  	{
  		  		this.state.categories &&
  		  		<Hamburger categories={this.state.categories} />
  		  	}
        </div>
		  </div>
		)
	}

}
export default Header
