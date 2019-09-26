import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as types from './action.types'
import {
  usersSuccess,
  usersFailure,
  createUserSuccess,
  createUserFailure
} from './actions'
import {
  getUsers,
  createUser
} from './services'

function* usersRequest(request) {
  try {
    const data = yield call(getUsers, request.payload)
    yield put(usersSuccess(data))
  } catch (err) {
    yield put(usersFailure(err))
  }
}

function* createUserRequest(request) {
  try {
    const user = yield call(createUser, request.payload)
    yield put(createUserSuccess(user))
  } catch (err) {
    yield put(createUserFailure(err))
  }
}

export function* usersSaga() {
  yield all([
    takeEvery(types.USERS_REQUEST, usersRequest),
    takeEvery(types.CREATE_USER_REQUEST, createUserRequest),
  ])
}
