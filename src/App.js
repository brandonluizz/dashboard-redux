import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  HashRouter,
} from 'react-router-dom'
import Root from './pages/Root'
import configureStore from './configureStore'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Root />
        </HashRouter>
      </Provider>
    )
  }
}

export default App
