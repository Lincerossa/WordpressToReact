import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { get } from 'axios'

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

    const slug = window.location.pathname.slice(1)

    const endPoint = taxonomy => `http://192.168.33.10/wordpress/wp-json/wp/v2/${taxonomy}?slug=${slug}`

    const posts = endPoint('posts')
    const pages = endPoint('pages')
    const categories = endPoint('categories')

    [ posts, pages, categories ].map( (i, index) => {

      get(checktaxonomy[index])
        .then( ({ data }) => {
          if(data.length){
            console.log("OKOKOKOK",data[0].taxonomy)
            this.setState({
              taxonomy: data[0].taxonomy
            })
          }
        })
        .catch( (error) =>{
          console.log(error);
        });     

    })

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
