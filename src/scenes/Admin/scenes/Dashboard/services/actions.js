import * as types from './action.types'

export const LastNewsRequest = data => {
  return {
    type: types.LAST_NEWS_REQUEST,
    payload: data
  }
}

export const lastNewsSuccess = data => {
  return {
    type: types.LAST_NEWS_SUCCESS,
    payload: data
  }
}

export const LastNewsFailure = err => {
  return {
    type: types.LAST_NEWS_FAILURE,
    payload: err
  }
}

export const LastPostsRequest = data => {
  return {
    type: types.LAST_POSTS_REQUEST,
    payload: data
  }
}

export const LastPostsSuccess = data => {
  return {
    type: types.LAST_POSTS_SUCCESS,
    payload: data
  }
}

export const LastPostsFailure = err => {
  return {
    type: types.LAST_POSTS_FAILURE,
    payload: err
  }
}