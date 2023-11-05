import React from 'react';
import { MainDiv, Circle } from './styles/main.styles';

export interface ToggleSwitchProps {
  value: boolean;
  onClick: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onClick }) => {
  return (
    <MainDiv $active={value} onClick={onClick}>
      <Circle $active={value}></Circle>
    </MainDiv>
  );
};

export default ToggleSwitch;
