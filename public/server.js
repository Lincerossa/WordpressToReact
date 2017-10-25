import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { get } from 'axios'
import api from './src/api'
import Root from './src/Root.js'

const page = (req, data, propsToRehydrate ) => `
  <!DOCTYPE html>
    <html>
      <head>
      <title>Wordpress To React Server</title>
      <link rel='stylesheet' href='/style.css' />
      </head>
      <body>
      ${ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
          <Root data={data}/>
        </StaticRouter>
      )}
      <script src='/main.js' async type='text/javascript'></script>
      <script async type='text/javascript'>
        var TT = ${JSON.stringify(propsToRehydrate.data)}
      </script>
    </body>
  </html>
`
const app = express()

app.use(express.static(__dirname + '/dist/scripts'));

app.get('/', async (req, res) => {
  const data = await get(api.getPosts)
  res.send( page(req, data, data ))
})

app.get('/posts', async (req, res) => {
  const data = await get(api.getPosts)
  res.send( page(req, data, data ))
})

app.get('/post/:slug', async (req, res) => {
  const data = await get(api.getPosts)
  res.send( page(req, data, data ))
})

app.get('/categories', async (req, res) => {
  const data = await get(api.getCategories)
  res.send( page(req, data, data ))
})

app.get('/category/:slug', async (req, res) => {
  const data = await get(api.getCategories)
  res.send( page(req, data, data ))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
