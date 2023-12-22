import React from 'react';
import { StyledNextTetromino } from './styles/StyledNextTetromino';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <StyledNextTetromino width={6} height={18}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledNextTetromino>
);

export default NextTetromino;
