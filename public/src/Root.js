import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import routes from './server/routes'
import { Posts, Post, Page, Categories, Category, Header } from './components'

const Root = ({ data, type, categories }) => {

    const MyPosts = (props) => {
      return (
        <Posts 
          posts={data}
          type={type}
          {...props}
        />
      )
    }

    const MyPost = (props) => {
      return (
        <Post
          post={data}
          type={type}
          {...props}
        />
      )
    }

    const MyCategory= (props) => {
      return (
        <Category
          category={data}
          type={type}
          {...props}
        />
      )
    }

    const MyCategories = (props) => {
      return (
        <Categories
          categories={data}
          type={type}
          {...props}
        />
      )
    }

    return(
      <div className="Root" id="root">
        <Header />
      	<Switch> 
          <Route exact path='/' component={Page} /> 
          <Route path='/posts/' component={MyPosts}/>
          <Route path='/post/:slug' component={MyPost}/>
          <Route path='/category' component={MyCategory}/>
          <Route path='/categories/' component={MyCategories}/>  
        </Switch>
      </div>
    )
  
}

export default Root
