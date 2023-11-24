// Cell.js
import React from 'react';
import styled from 'styled-components';
import { TETROMINOES } from '../tetrominos';

const StyledCell = styled.div`
  background: rgba(${(props) => props.color}, 0.8);
  width: 25px;
  height: 25px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Cell = ({ type }) => {
  return <StyledCell color={TETROMINOES[type].color} />
};

export default Cell;
