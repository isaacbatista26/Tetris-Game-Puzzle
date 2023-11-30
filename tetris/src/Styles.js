import styled from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Alterado para espaço entre os elementos */
  color: white; /* Cor do texto - você pode querer ajustar isso conforme necessário */
  `;
  //padding: 20px; /* Adicionado para espaçamento interno */

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para uma disposição de coluna */
  align-items: flex-end;
  justify-content: space-between; /* Ajustado para alinhamento no início */
  width: 400px;
  height: 100%;
  `;
  //padding: 0px ; /* Adicionado para espaçamento interno */
export const RightSide = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para uma disposição de coluna */
  align-items: flex-start;
  justify-content: flex-start; /* Ajustado para alinhamento no início */
  background-color: green;
  width: 400px;
  height: 100%;
  padding: 0px ; /* Adicionado para espaçamento interno */
`;