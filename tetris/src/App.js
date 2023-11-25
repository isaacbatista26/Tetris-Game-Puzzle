import React from 'react';
import styled from 'styled-components';

import Grid from './Components/Grid';
import PlayerInfo from './Components/PlayerInfo';

import useGridState from './Hooks/useGridState';

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff; /* Cor de fundo da barra lateral */
  color: white;
  width: 600px; /* Largura da barra lateral */
`;

const Sidebar = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  background-color: #111; /* Cor de fundo da barra lateral */
  color: white;
  width: 100px; /* Largura da barra lateral */
`;

const App = ({ playerInfo }) => {
  const { grid } = useGridState();

  return (
    <div>
      <h1>Tetris Block Puzzle</h1>
      <StyledSection>
        <Main>
          <Sidebar>
            <PlayerInfo info={playerInfo} />{/*INFOS COMO: NOME, NIVEL, RECORD*/}
            <h2>Score</h2> {/*SCORE DO JOGO ATUAL*/}
          </Sidebar>
          <Grid grid={grid} />
          <Sidebar>
            <h1>Next tetromino</h1> {/*PAINEL DO PROX TETROMINO */}
          </Sidebar>
        </Main>
      </StyledSection>
    </div>
    );
};

export default App;
