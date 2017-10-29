import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { get } from 'axios'
import api from './src/api'
import Root from './src/components/Root'

const layout = (req, data, generals) => `
  <!DOCTYPE html>
    <html>
      <head>
      <title>Wordpress To React Server</title>
      <link rel='stylesheet' href='/style.css' />
      </head>
      <body>
      ${ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
          <Root data={data.data} generals={generals.data}/>
        </StaticRouter>
      )}
      <script src='/main.js' async type='text/javascript'></script>
      <script async type='text/javascript'>
        var PROPS = ${JSON.stringify(data.data)}
        var GENERALS = ${JSON.stringify(generals.data)}
      </script>
    </body>
  </html>
`
const app = express()

app.use(express.static(__dirname + '/dist/scripts'));

app.get('/', async (req, res) => {
  let data = await get(api.getPosts)
  const generals = await get(api.getCategories)
  
  res.send( layout(req, data, generals))
})

app.get('/posts', async (req, res) => {
  let data = await get(api.getPosts)
  const generals = await get(api.getCategories)
  
  res.send( layout(req, data, generals))
})

app.get('/post/:slug', async (req, res) => {
  let data = await get(api.getPosts)
  const generals = await get(api.getCategories)
  
  res.send( layout(req, data, generals))
})

app.get('/categories', async (req, res) => {
  let data = await get(api.getCategories)
  const generals = await get(api.getCategories)
  
  res.send( layout(req, data, generals))
})

app.get('/category/:slug', async (req, res) => {
  let data = await get(api.getCategories)
  const generals = await get(api.getCategories)
  
  res.send( layout(req, data, generals))
})

app.get('/:slug', async (req, res) => {
  let data = await get(api.getCategories)
  const generals = await get(api.getCategories)

  res.send( layout(req, data, generals))
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
