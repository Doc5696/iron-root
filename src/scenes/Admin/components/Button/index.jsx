import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styled/StyledButton'

const Button = ({
  text,
  type,
}) => {
  return (
    <StyledButton
      type={type}
    >
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

export default Button
