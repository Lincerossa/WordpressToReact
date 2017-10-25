import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { get } from 'axios'
import path from 'path'
import Root from './src/Root.js'

const content = (req, type, data) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Root type={type} data={data}/>
    </StaticRouter>
  )
}

const page = (content, propsToRehydrate ) => `
  <!DOCTYPE html>
    <html>
      <head>
      <title>Wordpress To React Server</title>
      <link rel='stylesheet' href='/dist/scripts/style.css' />
      </head>
      <body>
      ${content}
      <script src='/dist/scripts/main.js' async type='text/javascript'></script>
      <script async type='text/javascript'>
        var TT = ${JSON.stringify(propsToRehydrate.data)}
      </script>
    </body>
  </html>
`
const api = 'http://dev.wordpresstoreact.it/wordpress/wp-json/wp/v2/'

const app = express()
app.use(express.static('dist'))
app.get('/', async (req, res) => {
  const data = await get(api+'posts')
  res.send( page(content(req, 'homePage', data), data ))
})

//posts generali
app.get('/posts', async (req, res) => {
  const data = await get(api+'posts')
  res.send( page(content(req, 'posts', data), data ))
})

//post singolo
app.get('/post/:slug', async (req, res) => {
  const data = await get(api+'posts')
  res.send( page(content(req, 'post', data),data ))
})

//categories
app.get('/categories', async (req, res) => {
  const data = await get(api+'categories')
  res.send( page(content(req, 'categories', data),data ))
})

//categories
app.get('/category/:slug', async (req, res) => {
  const data = await get(api+'categories')
  res.send( page(content(req, 'category', data),data ))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
