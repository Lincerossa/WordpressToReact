import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './components/Root.js'

const renderApp = (PROPS, GENERALS) => {
    ReactDOM.hydrate((
      <BrowserRouter>
        <Root data={PROPS} generals={GENERALS}/>
      </BrowserRouter>
    ), document.getElementById('app'))
}

window.addEventListener('DOMContentLoaded', renderApp(PROPS, GENERALS), false)