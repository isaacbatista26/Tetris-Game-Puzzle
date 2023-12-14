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

    const [action, setAction] = useState("Login"); // Adicionando o estado e a função para alterá-lo


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
        <Submit className={action === "Login" ? "gray" : ""} onClick={() => { setAction("Sign Up") }}>
          Create Account
        </Submit>
        <Submit className={action === "Sign Up" ? "gray" : ""} onClick={() => { setAction("Login") }}>
          Login
        </Submit>
        
      </SubmitContainer>

    </Container>
  );
}

export default Register;
