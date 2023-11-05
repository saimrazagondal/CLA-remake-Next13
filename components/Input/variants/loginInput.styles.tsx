import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CustomLoginLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const CustomAuthInput = styled.input`
  width: calc(100% - 10px);
  height: 42px;
  padding-left: 10px;
  border: none;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  &:focus {
    outline: none;
  }
`;
