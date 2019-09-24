import { connect } from 'react-redux'
import Users from './index'

import {
  usersRequest,
  createUserRequest,
} from './services/actions'

const mapStateToProps = state => ({
  users: state.users.users,
  lastPosts: state.home.lastPosts,
})

const mapDispatchToProps = dispatch => ({
  usersRequest: () => dispatch(usersRequest()),
  createUserRequest: user => dispatch(createUserRequest(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)
