import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
  display: grid;
  justify: center;
`;
export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  width: 480px;
  padding: 24px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 3px;
`;
export const Title = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  padding: 12px 0;
`
export const Input = styled.input`
  background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
  border-radius: 3px;
`
export const ErrorMessage = styled.span`
  font-size: 12px;
  align-self: flex-end;
`
export const ButtonContainer = styled.div`
  margin-top: 24px;
`
export const FormButton = styled.button``