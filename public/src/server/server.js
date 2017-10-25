import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { get } from 'axios'

import Root from '../Root'

const app = express()

const page = (content) => `
  <!DOCTYPE html>
    <html>
      <head>
      <title>Wordpress To React Server</title>
      <link rel='stylesheet' href='/dist/scripts/style.css' />
      </head>
      <body>
      ${content}
      <script src='/dist/scripts/main.js' async type='text/javascript'></script>
    </body>
  </html>
`

const content = (req, type, data) => {

  return ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Root type={type} data={data}/>
    </StaticRouter>
  )

}

app.get('/', async (req, res) => {
  const data = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/posts')
  res.set('Content-Type', 'text/html')
  res.send( page(content(req, 'homePage', data)))
})

//posts generali
app.get('/posts', async (req, res) => {
  const data = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/posts')
  res.set('Content-Type', 'text/html')
  res.send( page(content(req, 'posts', data)))
})

//post singolo
app.get('/post/:slug', async (req, res) => {
  const data = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/posts')
  res.set('Content-Type', 'text/html')
  res.send( page(content(req, 'post', data)))
})

//categories
app.get('/categories', async (req, res) => {
  const data = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/categories')
  res.set('Content-Type', 'text/html')
  res.send( page(content(req, 'categories', data)))
})

//categories
app.get('/category/:slug', async (req, res) => {
  const data = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/categories')
  res.set('Content-Type', 'text/html')
  res.send( page(content(req, 'category', data)))
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
