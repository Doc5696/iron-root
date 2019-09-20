import { combineReducers } from 'redux'

import home from '../../scenes/User/scenes/Home/services/reducer'

const rootReducer = combineReducers({
  home,
})

export default rootReducer