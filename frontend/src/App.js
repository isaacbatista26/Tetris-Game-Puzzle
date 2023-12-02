import React from 'react';
//Styled Components
import {StyledSection} from './Components/styles/StyledSection';
import {Main} from './Components/styles/Main';
import {LeftSide} from './Components/styles/LeftSide';
import {RightSide} from './Components/styles/RightSide';
import StyledIcon from './Components/styles/StyledIcon';
//Components
import Grid from './Components/Grid';
import PlayerInfo from './Components/PlayerInfo';
import GameInfo from './Components/GameInfo'
import NextTetromino from './Components/NextTetromino'
//Hooks
import useGridState from './Hooks/useGridState';

const App = ({ playerInfo }) => {
  const { grid } = useGridState();
  return (
    <div>
      <StyledIcon />
      <StyledSection>
        <Main>
          <LeftSide>
            <PlayerInfo info={playerInfo} />
            <GameInfo></GameInfo>
          </LeftSide>
          <Grid grid={grid} />
          <RightSide>
            <NextTetromino></NextTetromino>
          </RightSide>
        </Main>
      </StyledSection>
    </div>
  );
};

export default App;
