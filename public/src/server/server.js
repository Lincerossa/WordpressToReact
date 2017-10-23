import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { get } from 'axios'

import Root from '../Root'
// import { posts, pages, categories } from '../api'

const app = express()

  const header = `<!DOCTYPE html>
                  <html>
                    <head>
                    <title>Wordpress To React Server</title>
                    <link rel='stylesheet' href='/dist/scripts/style.css' />
                    </head>
                    <body>`

  const content = (req, type, data) => ReactDOMServer.renderToString(
                    <StaticRouter location={req.url} context={{}}>
                      <Root type={type} data={data}/>
                    </StaticRouter>
                  )

  const footer = `<script src='/dist/scripts/main.js' async type='text/javascript'></script>
                  </body>
                </html>`


  app.get('/posts', async (req, res) => {
    const CC = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/posts')
    res.set('Content-Type', 'text/html')
    res.send(header+content(req, 'posts', CC)+footer);
  });


  app.get('/post/:slug', async (req, res) => {
    const CCC = await get('http://192.168.33.10/wordpress/wp-json/wp/v2/posts?slug=:slug')
    res.set('Content-Type', 'text/html')
    res.send(header+content(req, 'post', CCC)+footer);
  });

  app.get('/categories/', function (req, res) {
    res.set('Content-Type', 'text/html')
    res.send(header+content(req, 'categories')+footer);
  });

  app.get('/category/:slug', function (req, res) {
    res.set('Content-Type', 'text/html')
    res.send(header+content(req, 'category')+footer);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
