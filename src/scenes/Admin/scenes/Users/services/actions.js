import * as types from './action.types'

export const usersRequest = data => {
  return {
    type: types.USERS_REQUEST,
    payload: data
  }
}

export const usersSuccess = data => {
  return {
    type: types.USERS_SUCCESS,
    payload: data
  }
}

export const usersFailure = err => {
  return {
    type: types.USERS_FAILURE,
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
