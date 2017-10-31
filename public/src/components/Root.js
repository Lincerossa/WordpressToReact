import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Posts, Post, Page, Categories, Category, Header, Home } from './'
import { system } from '../utility'

const Root = ({ data, generals }) => {


  const MyPosts = props => <Posts posts={data} {...props} />
  const MyPost = props => <Post post={data} {...props} />
  const MyCategory = props => <Category category={data} {...props} />
  const MyCategories = props => <Categories categories={data} {...props} />
  const MyHome = props => <Home home={data} {...props} />
  const MyPage = props => <Page page={data} {...props} />

  const yourHandler = () => {
    console.log("cambiato")
  }

  return(

    <div className="Root">
      <Header categories={generals} />
      <Switch > 
        <Route onChange={yourHandler()} exact path='/' component={MyHome} /> 
        <Route onChange={yourHandler()} path='/posts/' component={MyPosts}/>
        <Route onChange={yourHandler()} path='/post/:slug' component={MyPost}/>
        <Route onChange={yourHandler()} path='/category' component={MyCategory}/>
        <Route onChange={yourHandler()} path='/categories/' component={MyCategories}/>  
        <Route onChange={yourHandler()} path='/:slug' component={MyPage}/>  
      </Switch>
    </div>
  )
}

export default Root
