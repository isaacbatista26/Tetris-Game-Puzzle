import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Cell = ({tetrimo}) => {
  return (
    <StyledCell>
      <p>{tetrimo}</p>
    </StyledCell>);
};

export default Cell;
