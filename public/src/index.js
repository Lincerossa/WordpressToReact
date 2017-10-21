import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { get, all, spread } from 'axios'

import { Posts, Header } from './components'

class Content extends Component {

  constructor(props){

    super(props)

    this.state = {
      slug: null,
      taxonomy: null
    }

  }

  fetchData(){

    const api = type => `http://192.168.33.10/wordpress/wp-json/wp/v2/${type}`

    const getPosts = () => get(api('posts'))
    const getPages = () => get(api('pages'))
    const getCategories = () => get(api('categories'))

    all([ getPosts(), getPages(), getCategories() ])

      .then(spread( (posts, pages, categories) => {

        const routes = slug => ({ slug: slug })

        const postRoutes = posts.data.map( ({slug}) => {
          return{
            slug: slug
          }
        })

        const pageRoutes = pages.data.map( ({slug}) => {
          return{
            slug: slug
          }
        })

        const categoryRoutes = categories.data.map( ({slug}) => {
          return{
            slug: slug
          }
        })


        console.log('posts--->',postRoutes)
        console.log('categories--->',categoryRoutes)
        console.log('pages--->',pageRoutes)

      }))



  }

  componentDidMount(){
    this.fetchData()
  }
  
  render(){

    const { slug, taxonomy } = this.state

    return(
    	<Switch>  
        {
          slug && taxonomy=="post" &&
          <Route exact path={slug} component={Posts}/>
        }
        {
          slug && taxonomy=="post" &&
          <Route exact path={slug} component={Posts}/>
        }
        {
          slug && taxonomy=="post" &&
          <Route exact path={slug} component={Posts}/>
        }
        {
          slug && taxonomy=="post" &&
          <Route exact path={slug} component={Posts}/>
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
