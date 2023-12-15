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
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`;

export const Underline = styled.div`
  width: 61px;
  height: 6px;
  background: #fff;
  border-radius: 9px;
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

export const ForgotPassword = styled.div`
  padding-left: 220px;
  margin-top: 27px;
  color: #fff;
  font-size: 18px;

  & span {
    color: #484c7a;
    cursor: pointer;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 50px auto;
`;

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: #fff;
  background: #393939;
  border-radius: 50px;
  font-size: 19px;
  font-weight: 700;
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
