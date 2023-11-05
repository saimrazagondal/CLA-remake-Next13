import styled from 'styled-components';

export const FormBasicContainer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
`;

export const FormBasicLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.textColors.inputLabels};
`;

export const FormBasicInput = styled.input`
  padding-left: 12px;
  width: calc(100% - 12px);
  height: 42px;
  border: none;
  color: #172b4d;
  box-shadow: 0px 0px 0px 1px ${(p) => p.theme.colors.dividers};
  outline: none;
  font-family: ${(p) => p.theme.fonts.primary};
  background-color: ${(p) => (p.disabled ? p.theme.colors.disabled : 'white')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'auto')};

  &:hover {
    outline: none;
  }

  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`;
