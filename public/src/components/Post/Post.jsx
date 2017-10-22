import React, {Component} from 'react'
import { get } from 'axios'

import style from './Post.scss'

class Post extends Component {


  constructor(props){

    super(props)

    this.state = {
      posts: []
    }

  }


  fetchData(){

    const ENDPOINT = 'http://192.168.33.10/wordpress/wp-json/wp/v2/posts'

    get(ENDPOINT)
      .then( ({ data }) => {
        this.setState({
          posts: data
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
    console.log("siii--->", this.props.posts)
    return(
      <div> 

      {
        this.state.posts &&
        this.state.posts.map( post => {

          return <div className={style.post}>titolo post </div>
        })
        
      }
      </div>
    )}

  }


export default Post