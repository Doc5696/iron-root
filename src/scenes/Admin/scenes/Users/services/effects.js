import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as types from './action.types'
import {
  usersSuccess,
  usersFailure,
  LastPostsSuccess,
  LastPostsFailure
} from './actions'
import {
  getUsers,
  getPosts
} from './services';

function* usersRequest(request) {
  try {
    const data = yield call(getUsers, request.payload)
    yield put(usersSuccess(data))
  } catch (err) {
    yield put(usersFailure(err))
  }
}

function* postsRequest(request) {
  try {
    const data = yield call(getPosts, request.payload)
    yield put(LastPostsSuccess(data))
  } catch (err) {
    yield put(LastPostsFailure(err))
  }
}

export function* usersSaga() {
  yield all([
    takeEvery(types.USERS_REQUEST, usersRequest),
    takeEvery(types.LAST_POSTS_REQUEST, postsRequest)
  ])
}
