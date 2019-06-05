import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import './index.css' //will apply styles to everything from a single CSS file by injecting a <style> tag into the DOM

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here! */}
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)
