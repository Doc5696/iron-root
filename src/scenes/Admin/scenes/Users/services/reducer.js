import * as types from './action.types'

const initialState = {
  users: [],
  lastPosts: [],
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_REQUEST: {
      return { ...state }
    }
    case types.USERS_SUCCESS: {
        return {
        ...state,
        users: [...action.payload],
      };
    }
    case types.USERS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.LAST_POSTS_REQUEST: {
      return { ...state };
    }
    case types.LAST_POSTS_SUCCESS: {
      return {
        ...state,
        lastPosts: [...action.payload.data],
      };
    }
    case types.LAST_POSTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

export default users
