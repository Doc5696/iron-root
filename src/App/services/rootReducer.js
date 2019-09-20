import { combineReducers } from 'redux'

import home from '../../scenes/User/scenes/Home/services/reducer'
import users from '../../scenes/Admin/scenes/Users/services/reducer'

const rootReducer = combineReducers({
  home,
  users
})

export default rootReducer
