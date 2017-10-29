import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Posts, Post, Page, Categories, Category, Header, Home } from './'
import { system } from '../utility'

const Root = ({ data, generals }) => {

  console.log("siiii", generals)

  const MyPosts = props => <Posts posts={data} {...props} />
  const MyPost = props => <Post post={data} {...props} />
  const MyCategory = props => <Category category={data} {...props} />
  const MyCategories = props => <Categories categories={data} {...props} />
  const MyHome = props => <Home home={data} {...props} />
  const MyPage = props => <Page page={data} {...props} />


  return(

    <div className={system} id={system}>
      <Header categories={generals} />
      <Switch> 
        <Route exact path='/' component={MyHome} /> 
        <Route path='/posts/' component={MyPosts}/>
        <Route path='/post/:slug' component={MyPost}/>
        <Route path='/category' component={MyCategory}/>
        <Route path='/categories/' component={MyCategories}/>  
        <Route path='/:slug' component={MyPage}/>  
      </Switch>
    </div>
  )
}

export default Root
