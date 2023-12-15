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
import password_icon from '../Assets/password.png'


const Login = () =>  {

    return (
        <Container>
          <Title>TETRIS BLOCK PUZZLE</Title>
          <Header>
            <Text>Login</Text>
            <Underline></Underline>
          </Header>
          
          <Inputs>
            <Input>
              <InputImage src={user_icon} alt="" />
              <InputField type="text" placeholder="Nickname" />
            </Input>
            <Input>
              <InputImage src={password_icon} alt="" />
              <InputField type="password" placeholder="Password" />
            </Input>
          </Inputs>
    
          <SubmitContainer>
            <GraySubmit>
              Create Account
            </GraySubmit>
            <Submit>
              Login
            </Submit>
            
          </SubmitContainer>
    
        </Container>
      );
    }
    export default Login;