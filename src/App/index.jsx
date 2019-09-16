import React from 'react'
import { Provider } from 'react-redux'

import store from './services/createStore'

import Home from '../scenes/User/scenes/Home/container'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />    
      </Provider>
    )
  }
}

export default App;
