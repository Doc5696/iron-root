import React from 'react'
import PropTypes from 'prop-types'

// import Header from '../../../../components/Header'

import StyledTitle from './styled/StyledTitle'

class Page extends React.Component {
  render() {
    const {
      title,
    } = this.props
    return (
      <>
        {/* <Header /> */}
        <StyledTitle>
          {title}
        </StyledTitle>
      </>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string,
}

export default Page;