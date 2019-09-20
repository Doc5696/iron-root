import React from 'react'
import PropTypes from 'prop-types'

import Page from '../../shared/Page/container'
import Table from '../../shared/Table'
import CreateUserForm from './components/CreateUserForm'

import { tableHeaders } from './services/constants'

class Users extends React.Component {

  componentDidMount(){
    const { usersRequest } = this.props
    usersRequest()
  }

  render() {
    const {
      users,
    } = this.props
    return (
      <Page title="Users">
        <CreateUserForm />
        <Table
          headers={tableHeaders}
          data={users}
        />
      </Page>
    )
  }
}

Users.propTypes = {
  usersRequest: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}

export default Users;
