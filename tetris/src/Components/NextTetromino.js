import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
  display: block;
  background-color: green; /* Cor de fundo da barra lateral */
  width: 100px; /* Largura da barra lateral */
  height: 100px;
`;

const PlayerInfo = ({ info }) => {

    return (
      <StyledScore>Next</StyledScore>
    );
  };
  
  export default PlayerInfo;