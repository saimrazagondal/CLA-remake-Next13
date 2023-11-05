import styled from "styled-components";
import { ButtonProps } from "../types";

export const LoginButton = styled.button<ButtonProps>`
  width: 100%;
  height: 42px;
  background-color: ${(props) =>
    props.disabled
      ? props?.theme?.colors?.disabled
      : props?.theme?.colors?.secondary};
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  font-family: ${(p) => p.theme.fonts.primary};
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};

  transition: opacity 0.2s ease-in;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;
