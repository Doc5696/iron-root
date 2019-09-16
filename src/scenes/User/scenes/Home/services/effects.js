import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as types from './action.types'
import {
  lastNewsSuccess,
  LastNewsFailure,
  LastPostsSuccess,
  LastPostsFailure
} from './actions'
import {
  getNews,
  getPosts
} from './services';

function* newsRequest(request) {
  try {
    const data = yield call(getNews, request.payload)
    yield put(lastNewsSuccess(data))
  } catch (err) {
    yield put(LastNewsFailure(err))
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

export function* homeSaga() {
  yield all([
    takeEvery(types.LAST_NEWS_REQUEST, newsRequest),
    takeEvery(types.LAST_POSTS_REQUEST, postsRequest)
  ])
}