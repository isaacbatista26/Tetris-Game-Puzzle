import React from 'react';
import { Label } from './styles/Label';
import { StyledGameInfo } from './styles/SyledGameInfo';

const GameInfo = ({ info }) => {
    return (
      <StyledGameInfo>
        <Label>
          <div>
            Score<br/>{10820}
          </div>
        </Label>     
        <Label>
          <div>
            Lines <be/>{4}
          </div>
        </Label>
      </StyledGameInfo>
    );
  };
  
  export default GameInfo;