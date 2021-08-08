import styled from "styled-components";
import * as GlobalStyles from "../../constants/styles";

export const Container = styled.main`
  margin-top: 64px;
  width: 100%;
  display: grid;
`;
export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  width: 480px;
  padding: 24px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 3px;
`;
export const Title = styled.h2`
  color: ${GlobalStyles.midNightBluePrimary};
  border-bottom: 2px solid;
  width: 20%;
  padding: 0 0 8px 0px;
  align-self: center;
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  padding: 22px 0 0 0;
`;
export const Input = styled.input`
  background: ${GlobalStyles.paperWhite};
  border: none;
  border-bottom: 2px solid ${GlobalStyles.midNightBluePrimary};
  padding: 6px 0;
  margin: 8px 0;
  width: 100%;
  :focus {
    outline: none;
  }
`;
export const ErrorMessage = styled.span`
  font-size: 12px;
  align-self: flex-end;
  color: ${GlobalStyles.accentRogue};
`;
export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;
export const FormButton = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 8px 12px;
  color: ${(props) => props.primaryColor};
  border: 2px solid ${(props) => props.primaryColor};
  transition: all 0.3s;
  &:hover:enabled {
    filter: brightness(0.85);
    color: #fff;
    background-color: ${(props) => props.primaryColor};
  }
  &:disabled {
    cursor: default;
    border: 2px solid #ddd;
    color: #ddd;
  }
`;

export const FormErrorMessageText = styled.p`
  justify-self: center;
`;

export const FormErrorMessage = (props) => {
  return <FormErrorMessageText>{props.message}</FormErrorMessageText>;
};
