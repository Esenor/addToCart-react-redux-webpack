import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import SandBox from './components/SandBox.jsx'

require('./app.scss')

const store = createStore(reducer)

module.exports = {
  renderApp: function (id) {
    ReactDom.render(
      <Provider store={store}>
        <SandBox />
      </Provider>,
      document.getElementById(id)
    )
  }
}
