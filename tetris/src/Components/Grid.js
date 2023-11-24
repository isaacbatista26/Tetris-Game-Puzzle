// Grid.js
import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { TETROMINOES } from '../tetrominos';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 20px); // 3 colunas de 50px cada
  grid-template-rows: repeat(20, 20px); // 3 linhas de 50px cada
  grid-gap: 1px;
  margin: 0 auto;
`;

const Grid = ({ grid }) => {
  const currentPiece = TETROMINOES['S'];

  console.log(currentPiece.shape);
  return (
    <StyledGrid>
      {grid.map((row, rowIndex) => (
        row.map((type, colIndex) => (
          <Cell type={type} id={`${rowIndex}-${colIndex}`} />
        ))
      ))}
      

    </StyledGrid>
  );
};

export default Grid;
