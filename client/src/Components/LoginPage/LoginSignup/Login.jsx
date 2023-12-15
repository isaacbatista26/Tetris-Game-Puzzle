import React from 'react';
import { useState } from 'react';
import axios from 'axios';

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
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      }).then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    return (
        <Container>
          <Title>TETRIS BLOCK PUZZLE</Title>
          <Header>
            <Text>Login</Text>
            <Underline></Underline>
          </Header>
          
          <Inputs onSubmit={handleSubmit}>
            <Input>
              <InputImage src={user_icon} alt="" />
              <InputField type="text" placeholder="Email" id='email' onChange={ e => setEmail(e.target.value)}/>
            </Input>
            <Input>
              <InputImage src={password_icon} alt="" />
              <InputField type="password" placeholder="Password" id='password' onChange={e => setPassword(e.target.value)}/>
            </Input>
            <button type="submit">submit</button>
          </Inputs>
    
          <SubmitContainer>
            <GraySubmit>
              Create Account
            </GraySubmit>
            <Submit onClick={handleSubmit}>
              Login
            </Submit>
            
          </SubmitContainer>
    
        </Container>
      );
    }
    export default Login;
