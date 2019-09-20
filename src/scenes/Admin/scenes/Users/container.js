import { connect } from 'react-redux'
import Users from './index'

import {
  usersRequest,
} from './services/actions'

const mapStateToProps = state => ({
  users: state.users.users,
  lastPosts: state.home.lastPosts,
})

const mapDispatchToProps = dispatch => ({
  usersRequest: () => dispatch(usersRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)
