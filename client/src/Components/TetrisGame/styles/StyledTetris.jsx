import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
background: #222222;
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-items: stretch;
  margin: auto auto;


  aside {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
  }

`;
