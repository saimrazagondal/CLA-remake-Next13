import styled from 'styled-components';

export const MainDiv = styled.div<{ $active: boolean }>`
  width: 50px;
  cursor: pointer;
  padding: 2.5px;
  height: 25px;
  border-radius: 12.5px;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.primary : '#C5C2C2'};
  box-shadow: 0 0 2px #ccc;
  position: relative;
  transition: background 250ms;
`;

export const Circle = styled.div<{ $active: boolean }>`
  width: 20px;
  cursor: pointer;
  position: absolute;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  left: ${(props) => (props.$active ? '27.5px' : '2.5px')};
  transition: left 250ms;
`;
