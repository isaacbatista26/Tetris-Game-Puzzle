import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-gap: 1px;
  max-width: 500px;
  margin: 0 auto;
`;

const Grid = ({ grid }) => {
  return (
    <StyledGrid>
        {grid.map((t)=> {
            return <Cell tetrimo={t}/>
        })}
    </StyledGrid>
  );
};

export default Grid;