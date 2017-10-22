import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import path from 'path'
import fs from 'fs'
import url from 'url'

import routes from './routes'
import Root from '../Root'

routes()

  .then( ({ posts, pages, categories }) => {

    createServer((req, res) => {


      const parsedUrl = url.parse(req.url)
      const pathname = `.${parsedUrl.pathname}`
      const pathExt = path.parse(pathname).ext

      const mymeType = {
        '.js' : 'text/javascript',
        '.js.map' : 'text/javascript',
        '.css' : 'text/css',
        '.css.map' : 'text/css',
      }

      if(mymeType[pathExt] !== undefined){
        fs.readFile (pathname, (err,data) =>{
          res.writeHead(200, {"Content-Type": mymeType[pathExt]})
          res.end(data)
        })
      } else {
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write("<!DOCTYPE html>")
        res.write("<head>")
        res.write("<title>Wordpress To React Server</title>")
        res.write("<link rel='stylesheet' href='/dist/scripts/style.css' />")
        res.write("</head>")
        res.write("<body>")
        res.write(ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={{}}>
            <Root posts={posts} pages={pages} categories={categories} />
          </StaticRouter>
        ))
        res.write("<script src='/dist/scripts/main.js' async type='text/javascript'></script>")
        res.write("</body>")
        res.write("</html>")
        res.end()
      }
    }).listen(3000)

  })
