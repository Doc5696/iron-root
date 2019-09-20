import * as types from './action.types'

const initialState = {
  lastNews: [],
  lastPosts: [],
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case types.LAST_NEWS_REQUEST: {
      return { ...state }
    }
    case types.LAST_NEWS_SUCCESS: {
      return {
        ...state,
        lastNews: [...action.payload.data],
      };
    }
    case types.LAST_NEWS_FAILURE: {
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

export default home
