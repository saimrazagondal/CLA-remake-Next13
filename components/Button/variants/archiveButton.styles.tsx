import styled from 'styled-components';

export const Archive = styled.button`
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  color: white;
  background-color: #eb5757;
  width: 155px;
  height: 42px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 13px;
  border: none;
  outline: none;
  letter-spacing: 0.4px;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.9;
  }
`;
