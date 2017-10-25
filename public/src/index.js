import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root'
const run = () => {
    ReactDOM.render((
      <BrowserRouter>
        <Root data={TT}/>
      </BrowserRouter>
    ), document.getElementById('root'))
}

window.addEventListener('DOMContentLoaded', run(), false)