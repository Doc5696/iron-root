import React from 'react'
import PropTypes from 'prop-types'

// import Header from '../../../../components/Header'

import StyledTitle from './styled/StyledTitle'

class Page extends React.Component {
  render() {
    const {
      title,
      children,
    } = this.props
    return (
      <>
        {/* <Header /> */}
        <StyledTitle>
          {title}
        </StyledTitle>
        {children}
      </>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
}

export default Page;
