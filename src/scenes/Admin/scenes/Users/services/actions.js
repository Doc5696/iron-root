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

export const createUserRequest = user => {
  return {
    type: types.CREATE_USER_REQUEST,
    payload: user
  }
}

export const createUserSuccess = user => {
  return {
    type: types.CREATE_USER_SUCCESS,
    payload: user
  }
}

export const createUserFailure = err => {
  return {
    type: types.CREATE_USER_FAILURE,
    payload: err
  }
}
