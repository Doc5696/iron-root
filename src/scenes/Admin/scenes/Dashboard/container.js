import { connect } from 'react-redux'
import Dashboard from './index'

import {
  LastNewsRequest,
} from './services/actions'

const mapStateToProps = state => ({
  lastNews: state.home.lastNews,
  lastPosts: state.home.lastPosts,
})

const mapDispatchToProps = dispatch => ({
  LastNewsRequest: () => dispatch(LastNewsRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
