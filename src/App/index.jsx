import React from 'react'
import { Provider } from 'react-redux'

import store from './services/createStore'

import Home from '../scenes/User/scenes/Home/container'
import Admin from '../scenes/Admin/container'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Home />     */}
        <Admin />
      </Provider>
    )
  }
}

export default App;
