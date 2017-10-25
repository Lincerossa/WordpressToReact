import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Posts, Post, Page, Categories, Category, Header } from './'

const Root = ({ data }) => {

    const MyPosts = (props) => {
      return (
        <Posts 
          posts={data}
          {...props}
        />
      )
    }

    const MyPost = (props) => {
      return (
        <Post
          post={data}
          {...props}
        />
      )
    }

    const MyCategory= (props) => {
      return (
        <Category
          category={data}
          {...props}
        />
      )
    }

    const MyCategories = (props) => {
      return (
        <Categories
          categories={data}
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