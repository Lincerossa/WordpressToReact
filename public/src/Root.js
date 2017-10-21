import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { get, all, spread } from 'axios'

import { Post, Page, Category, Header } from './components'




class Root extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  fetchData(){

    const api = type => `http://192.168.33.10/wordpress/wp-json/wp/v2/${type}`

    const getPosts = () => get(api('posts'))
    const getPages = () => get(api('pages'))
    const getCategories = () => get(api('categories'))

    all([ getPosts(), getPages(), getCategories() ])

      .then(spread( (posts, pages, categories) => {

        const postRoutes = posts.data.map( ({ slug }) => ({ slug: `/${slug}` }) )
        const pageRoutes = pages.data.map( ({ slug }) => ({ slug: `/${slug}` }) )
        const categoryRoutes = categories.data.map( ({ slug }) => ({ slug: `/${slug}` }) )

        this.setState({
          postRoutes,
          pageRoutes,
          categoryRoutes,
        })

      }))
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){
    const { postRoutes, pageRoutes, categoryRoutes } = this.state
    return(
      <div className="Root">
        <Header />
      	<Switch> 
          {
            postRoutes && postRoutes.length &&
            postRoutes.map( post => <Route exact path={post.slug} component={Post}/> )
          }
          {
            pageRoutes && pageRoutes.length &&
            pageRoutes.map( page => <Route exact path={page.slug} component={Page}/> )
          }
          {
            categoryRoutes && categoryRoutes.length &&
            categoryRoutes.map( category => <Route exact path={category.slug} component={Category}/> )
          }
        </Switch>
      </div>
    )
  }
}

export default Root