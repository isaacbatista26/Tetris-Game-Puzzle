import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background: #222222;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;

  aside {
    width: 100%;
    height: 90vh;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    align-items: space-between;
  }

`;
