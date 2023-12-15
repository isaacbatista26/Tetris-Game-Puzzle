import React, { useState } from 'react';
import {
  Container,
  Header,
  Text,
  Underline,
  Inputs,
  Input,
  InputImage,
  InputField,
  ForgotPassword,
  SubmitContainer,
  Submit,
  GraySubmit,
  Title,
} from './StyledComponent.js'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Register = () => {


  return (
    <Container>
      <Title>TETRIS BLOCK PUZZLE</Title>
      <Header>
        <Text>Register</Text>
        <Underline></Underline>
      </Header>
      
      <Inputs>
        <Input>
          <InputImage src={user_icon} alt="" />
          <InputField type="text" placeholder="Nickname" />
        </Input>
        <Input>
          <InputImage src={email_icon} alt="" />
          <InputField type="email" placeholder='Email' />
        </Input>
        <Input>
          <InputImage src={password_icon} alt="" />
          <InputField type="password" placeholder="Password" />
        </Input>
      </Inputs>

      <SubmitContainer>
        <Submit>
          Create Account
        </Submit>
        <GraySubmit>
          Login
        </GraySubmit>
        
      </SubmitContainer>

    </Container>
  );
}

export default Register;
