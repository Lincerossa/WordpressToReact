import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { get, all, spread } from 'axios'

import { Post, Page, Category, Header } from './components'

const routes = () => {

  const api = type => `http://192.168.33.10/wordpress/wp-json/wp/v2/${type}`

  const getPosts = () => get(api('posts'))
  const getPages = () => get(api('pages'))
  const getCategories = () => get(api('categories'))

  return all([ getPosts(), getPages(), getCategories() ])
          .then(spread( (posts, pages, categories) => {
            return {
              posts: posts.data.map( ({ slug }) => ({ slug: `/${slug}` }) ),
              pages: pages.data.map( ({ slug }) => ({ slug: `/${slug}` }) ),
              categories: categories.data.map( ({ slug }) => ({ slug: `/${slug}` }) )
            }
          }))
  }


class Root extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  getRoutes(){
    routes()
      .then(({posts,pages,categories}) => {
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
        </Switch>
      </div>
    )
  }
}

export default Root