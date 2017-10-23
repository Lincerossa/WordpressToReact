import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './server/routes'
import { Post, Page, Category, Header } from './components'

class Root extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  getRoutes(){
    routes()
      .then( ({ posts, pages, categories }) => {
        this.setState({
          posts,
          pages,
          categories,
        })
      })
  }

  componentDidMount(){

    if(this.props.posts === undefined || this.props.pages === undefined || this.props.categories === undefined){
      this.getRoutes()
    }    
  }

  render(props){

    const posts = this.props.posts || this.state.posts || ''
    const pages = this.props.pages || this.state.pages || ''
    const categories = this.props.categories || this.state.categories || ''

    const PostWithApi = props => {
      return(
        <Post
          {...props}
          posts={posts}
        />
      )
    }

    return(
      <div className="Root" id="root">
        <Header categories={categories} />
        <div> ecco che funziahh</div>
      	<Switch> 
          {
            posts && posts.length &&
            posts.map( (post,key) => <Route key={key} exact path={post.slug} component={PostWithApi}/> )
          }
          {
            pages && pages.length &&
            pages.map( (page,key) => <Route key={key} exact path={page.slug} component={Page}/> )
          }
          {
            categories && categories.length &&
            categories.map( (category,key) => <Route key={key} exact path={category.slug} component={Category}/> )
          }
          <Route exact path='/' component={Page}/> 
        </Switch>
      </div>
    )
  }
}

export default Root