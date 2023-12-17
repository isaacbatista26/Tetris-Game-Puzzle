import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 15px 15px;
  padding: 15px;
  min-height: 30px;
  width: 150px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  outline: none;
  cursor: pointer;
`;

const Button = ({ callback, label }) => (
  <StyledButton onClick={callback}>{label}</StyledButton>
);

export default Button;
