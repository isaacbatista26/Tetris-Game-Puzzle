import React from 'react';
import styled from 'styled-components';

const StyledPlayerInfo = styled.div`
  display: block;
  background-color: red;
  padding: 10px;
  width: 200px;
  justfy-content: end;
`;

const Label = styled.div`
  font-weight: bold;
  color: black;
  background-color:white;
  padding: 8px 8px 8px 5px;
  margin: 10px;
`

const PlayerInfo = ({ info }) => {

    return (
      <StyledPlayerInfo>
        <Label>
          
          {info.nickname}
        </Label>
        <Label>
          Level {info.nivel}
        </Label>
      </StyledPlayerInfo>
    );
  };
  
  export default PlayerInfo;