import { all, fork } from 'redux-saga/effects'

import { homeSaga } from '../../scenes/User/scenes/Home/services/effects'

export default function* rootSaga() {
  yield all([
    fork(homeSaga),
  ])
}
