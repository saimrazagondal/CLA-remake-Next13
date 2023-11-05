import styled from 'styled-components';

export const Save = styled.button<{ $mr?: string; $ml?: string }>`
  width: 120px;
  height: 40px;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  color: white;
  border-radius: 6px;
  margin-right: ${(props) => props.$mr};
  margin-left: ${(props) => props.$ml};
  border: none;
  outline: none;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  transition: opacity 0.2s ease-in;
  opacity: 1;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    opacity: 0.9;
    color: white;
  }
`;
