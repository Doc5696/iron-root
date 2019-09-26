import React from 'react'

import Button from '../../../../components/Button'

import StyledForm from './styled/StyledForm'
import StyledInput from './styled/StyledInput'
import StyledFormBlock from './styled/StyledFormBlock'
import StyledLabel from './styled/StyledLabel'

const CreateUserForm = ({
  onCreate,
}) => {
  return (
    <StyledForm id="CreateUserForm">
      <StyledFormBlock>
        <StyledLabel htmlFor="secondName">Прізвище</StyledLabel>
        <StyledInput id="secondName" type="text" name="secondName" />
      </StyledFormBlock>
      <StyledFormBlock>
        <StyledLabel htmlFor="firstName">Ім'я</StyledLabel>
        <StyledInput id="firstName" type="text" name="firstName" />
      </StyledFormBlock>
      <StyledFormBlock>
        <StyledLabel htmlFor="firstName">Email</StyledLabel>
        <StyledInput id="firstName" type="email" name="firstName" />
      </StyledFormBlock>
      <Button
        text="Зберегти"
        type="submit"
        onClick={() => onCreate({name: "john"})}
      />
      <Button
        text="Очистити"
        type="reset"
      />
    </StyledForm>
  )
}

export default CreateUserForm
