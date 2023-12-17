import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Header,
  Text,
  Underline,
  Inputs,
  Input,
  InputImage,
  InputField,
  SubmitContainer,
  Submit,
  GraySubmit,
  Title,
  Validation,
} from '../Components/LoginPage/StyledLogin.jsx';

import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState(0);
  const [forceRerender, setForceRerender] = useState(false);

  const errorMessage = 'Email ou senha inválidos';
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email : email,
        password: password,
      });
      console.log(res);
      console.log(res.data);
      setErrorCode(0);
      localStorage.setItem('tetris@user', JSON.stringify(res.data));
      navigate('/tetris');
    } catch (error) {
      console.error('Erro:', error);
      setErrorCode(1); 
      setForceRerender((prevState) => !prevState);
    }
  };

  useEffect(() => {
    localStorage.removeItem('tetris@user');
  }, [forceRerender]);

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
          <InputField type="text" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </Input>
        <Input>
          <InputImage src={password_icon} alt="" />
          <InputField type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </Input>
      </Inputs>
      {errorCode !== 0 ? <Validation>{errorMessage}</Validation> : null}
      <SubmitContainer>
        <GraySubmit onClick={()=>navigate('/register')}>Create Account</GraySubmit>
        <Submit onClick={handleSubmit}>Login</Submit>
      </SubmitContainer>
    </Container>
  );
};

export default Login;
