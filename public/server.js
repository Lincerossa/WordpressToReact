import express from 'express'
import path from 'path'

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(process.cwd(),'/index.html'))
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!')
})