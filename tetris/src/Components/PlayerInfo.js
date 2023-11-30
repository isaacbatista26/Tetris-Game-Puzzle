import React from 'react';
import styled from 'styled-components';
import { Label } from './styles/Label';

const StyledPlayerInfo = styled.div`
  display: block;
  padding: 0px 30px 10px 10px;
  width: 100px;
  justfy-content: end;
  padding-top: 10px;
  border-right: 2px solid #2E2E2E;
`;

const PlayerInfo = ({ info }) => {

    return (
      <StyledPlayerInfo>
        <Label>
          <div>
            {info.nickname}
          </div>
        </Label>
        <Label>
          Level {info.nivel}
        </Label>
      </StyledPlayerInfo>
    );
  };
  
  export default PlayerInfo;