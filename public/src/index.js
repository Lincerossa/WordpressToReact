import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { get, all, spread } from 'axios'

import { Posts, Header } from './components'

class Content extends Component {

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
    	<Switch> 
        {
          postRoutes && postRoutes.length &&
          postRoutes.map( post => <Route exact path={post.slug} component={Posts}/> )
        }
        {
          pageRoutes && pageRoutes.length &&
          pageRoutes.map( page => <Route exact path={page.slug} component={Posts}/> )
        }
        {
          categoryRoutes && categoryRoutes.length &&
          categoryRoutes.map( category => <Route exact path={category.slug} component={Posts}/> )
        }
      </Switch>
    )
  }
}

const Layer = () => 
  <div className="Layer">
    <Header />
    <Content />
  </div>

ReactDOM.render((
  <BrowserRouter>
    <Layer />
  </BrowserRouter>
), document.getElementById('root'))
