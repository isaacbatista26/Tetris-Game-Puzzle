import React from 'react';
import { useState, useEffect } from 'react';
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
  Validation,
} from '../Components/LoginPage/StyledLogin.jsx'


import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'


const Login = () =>  {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ ur, setError ] = useState(0);
    const errorMensage = {
      401: "Credenciais inválidas",
      403: "Acesso negado"
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
        if (error.response) {
          // O servidor respondeu com um código de status diferente de 2xx
          console.error('Erro de resposta do servidor:', error.response.data);
          console.error('Status do erro:', error.response.status);
          
          // Trate o código de status específico aqui
          if (error.response.status === 401) {
            console.log('Credenciais inválidas');
            setError(401);
          } else if (error.response.status === 403) {
            console.log('Acesso negado');
            setError(403);
          }
        } else if (error.request) {
          // A solicitação foi feita, mas não houve resposta do servidor
          console.error('Erro na solicitação:', error.request);
        } else {
          // Algo aconteceu ao configurar a solicitação que acionou um erro
          console.error('Erro ao configurar a solicitação:', error.message);
        }
      });
    }

    useEffect(() => {}, [ur]);

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
          </Inputs>
          {
            ur != 0 ? <Validation>{errorMensage.ur}</Validation> : null
          }
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
