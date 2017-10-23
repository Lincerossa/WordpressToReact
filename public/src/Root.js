import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import routes from './server/routes'
import { Post, Page, Category, Header } from './components'

const Root = ({ data, type, categories }) => {

    return(
      <div className="Root" id="root">
        <Header categories={categories} />
      	<Switch> 
          <Route exact path='/' component={ data => <Page data={data} /> } /> 

          <Route exact path='/posts' component={ data => <Post data={data} type={type} /> }/>
          <Route path='/post/' component={ data => <Post data={data} type={type} />}/>

          <Route exact path='/category' component={ data => <Category data={data} />}/>
          <Route path='/categories/' component={ data => <Category data={data} /> }/>  

        </Switch>
      </div>
    )
  
}

export default Root