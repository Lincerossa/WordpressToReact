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

    const { posts, pages, categories } = this.props
    if(posts === undefined || pages === undefined || categories === undefined){
      this.getRoutes()
    }    
  }

  render(props){

    let { posts, pages, categories } = this.props

    if(posts === undefined || pages === undefined || categories === undefined){
      posts = this.state.posts
      pages = this.state.pages
      categories = this.state.categories
    }

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