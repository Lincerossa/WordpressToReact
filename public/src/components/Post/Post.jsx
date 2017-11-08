import React from 'react'
import { connect } from 'react-redux'
import style from './Post.scss'

const Post = ({ post, counter='' }) => {
  console.log('postData---->',post)
  return(
    <div> 
      singolo post: ecco il counter {counter}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
/*
const mapDispatchToProps = dispatch => {
  return {
    counter: () => dispatch({
      type: 'DESTROY_TODO'
    })
  }
}
*/

export default connect(
  mapStateToProps,
)(Post)
