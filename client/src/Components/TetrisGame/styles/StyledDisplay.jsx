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
  color: ${props => (props.gameOver ? 'red' : '#DCDCDC')};
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
`;
