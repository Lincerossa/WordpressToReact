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

      const html = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}>
          <Root/>
        </StaticRouter>
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
