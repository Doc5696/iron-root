import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './styled/StyledButton'

const Button = ({
  text,
  type,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={() => onClick()}
    >
      {text}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
