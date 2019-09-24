import * as types from './action.types'

const initialState = {
  users: [],
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_REQUEST: {
      return { ...state }
    }
    case types.USERS_SUCCESS: {
        return {
        ...state,
        users: [ ...action.payload ],
      };
    }
    case types.USERS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.CREATE_USER_REQUEST: {
      return { ...state }
    }
    case types.CREATE_USER_SUCCESS: {
        return {
        ...state,
        users: [ ...state.users, action.payload ],
      };
    }
    case types.CREATE_USER_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default users
