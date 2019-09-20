import { all, fork } from 'redux-saga/effects'

import { homeSaga } from '../../scenes/User/scenes/Home/services/effects'
import { usersSaga } from '../../scenes/Admin/scenes/Users/services/effects'

export default function* rootSaga() {
  yield all([
    fork(homeSaga),
    fork(usersSaga)
  ])
}
