import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  width: 900px;
  background: #232323;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 100%;
  margin-top: 30px;
`;

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 40px;
  font-weight: 400;
`;

export const Underline = styled.div`
  width: 61px;
  height: 2px;
  background: #fff;
  border-radius: 13px;
`;

export const Inputs = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 480px;
  height: 80px;
  background: #eaeaea;
  border-radius: 6px;
`;

export const InputImage = styled.img`
  margin: 0px 30px;
`;

export const InputField = styled.input`
  height: 50px;
  width: 400px;
  background: transparent;
  border: none;
  outline: none;
  color: #797979;
  font-size: 19px;
`;

export const SubmitContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px auto;
`;

export const Submit = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: #fff;
  background: #393939;
  border-radius: 20px;
  font-size: 19px;
  font-weight: 400;
  cursor: pointer;
`;

export const GraySubmit = styled(Submit)`
  background: #232323;
  color: #676767;
`;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


export const Validation = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: red;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  width: 230px;
  height: 20px;
  border-radius: 3px;
`;