import React, { useState } from 'react';
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
  ForgotPassword,
  SubmitContainer,
  Submit,
  GraySubmit,
  Title,
} from '../Components/LoginPage/StyledLogin.jsx'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Register = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = 
        await axios
        .post('http://localhost:5000/register', {
          nickname : nickname,
          email : email,
          password: password,
        });
        console.log(res);
        console.log(res.data);
        setErrorCode(0);

        navigate('/');
    } catch(error) {
      console.error('Erro:', error);
      setErrorCode(1);
    }
  }

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
          <InputField 
            type="text"
            placeholder="Nickname"
            id="nickname" 
            onChange={(e)=> setNickname(e.target.value)}/> 
        </Input>
        <Input>
          <InputImage src={email_icon} alt="" />
          <InputField 
            type="email"
            placeholder='Email'
            id="email"
            onChange={(e) => setEmail(e.targer.value)} />
        </Input>
        <Input>
          <InputImage src={password_icon} alt="" />
          <InputField 
            type="password" 
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.targer.value)} />
        </Input>
      </Inputs>

      <SubmitContainer>
        <Submit onClick={handleSubmit}>
          Create Account
        </Submit>
        <GraySubmit onClick={()=>navigate('/')}>
          Back
        </GraySubmit>
        
      </SubmitContainer>

    </Container>
  );
}

export default Register;
