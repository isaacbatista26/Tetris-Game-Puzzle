// Cell.js
import React from 'react';
import styled from 'styled-components';
import { TETROMINOES } from '../tetrominos';

const StyledCell = styled.div`
  background: #2E2E2E;
  width: 20px;
  height: 20px;
`;

const Cell = ({ type, id}) => {
  return <StyledCell color={TETROMINOES[type].color} id={id}/>
};

export default Cell;
