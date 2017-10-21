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
    this.getRoutes()
  }

  render(){
    const { posts, pages, categories } = this.state
    return(
      <div className="Root">
        <Header />
      	<Switch> 
          {
            posts && posts.length &&
            posts.map( post => <Route exact path={post.slug} component={Post}/> )
          }
          {
            pages && pages.length &&
            pages.map( page => <Route exact path={page.slug} component={Page}/> )
          }
          {
            categories && categories.length &&
            categories.map( category => <Route exact path={category.slug} component={Category}/> )
          }
          <Route exact path='/' component={Page}/> 
        </Switch>
      </div>
    )
  }
}

export default Root