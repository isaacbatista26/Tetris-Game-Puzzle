import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
  display: block;
  background-color: blue;
  height: 100px;
`;

const PlayerInfo = ({ info }) => {

    return (
      <StyledScore>score</StyledScore>
    );
  };
  
  export default PlayerInfo;