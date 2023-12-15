import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 10px;
  min-height: 20px;
  width: 100%;
  border-bottom: 3px solid #333;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
`;
