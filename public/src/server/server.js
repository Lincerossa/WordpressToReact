import express, { router } from 'express'
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import routes from './routes'
import Root from '../Root'
const app = express()

routes()
  .then( ({ posts, pages, categories }) => {

    createServer((req, res) => {

      const context = {}

      const html = ReactDOMServer.renderToString(<html>
        <head>
         <meta charSet="UTF-8" />
         <title>Wordpress To React</title>
         <link rel="stylesheet" href="/dist/scripts/style.css" />
        </head>
        <body>
        <StaticRouter location={req.url} context={context}>
          <Root posts={posts} pages={pages} categories={categories} />
        </StaticRouter>
        <script src="/dist/scripts/main.js"></script>
        </body>
        </html>
      )

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        })
        res.end()
      } else {
        res.write(html)
        res.end()
      }
    }).listen(3000)

  })
