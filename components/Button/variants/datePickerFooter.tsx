import styled from 'styled-components';

export const DatePickerFooter = styled.button<{ disabled?: boolean }>`
  width: 60%;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  opacity: ${(props) => props.disabled && '0.3'};
  height: 38px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`;
