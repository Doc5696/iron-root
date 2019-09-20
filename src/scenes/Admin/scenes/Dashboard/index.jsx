import React from 'react'
// import PropTypes from 'prop-types'

import Page from '../../shared/Page/container'

class Dashboard extends React.Component {

  componentDidMount(){
    const { LastNewsRequest } = this.props
    LastNewsRequest()
  }

  render() {
    return (
      <Page
        title="Dashboard"
      >

      </Page>
    )
  }
}

export default Dashboard;
