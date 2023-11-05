import React, { useCallback } from 'react';
import { LoginButton, Archive, DatePickerFooter, Save } from './variants';
import { ButtonProps } from './types';

const CustomButton: React.FC<ButtonProps> = (props) => {
  const { variant, children, text, ...rest } = props;

  const getType = useCallback(() => {
    switch (variant) {
      case 'login':
        return <LoginButton {...rest}>{children}</LoginButton>;

      case 'archive':
        return <Archive {...rest}>Archive Account</Archive>;

      case 'datePickerFooter':
        return <DatePickerFooter {...rest}>{text}</DatePickerFooter>;

      case 'save':
        return <Save {...rest}>{text}</Save>;

      default:
        <button {...props}>{text}</button>;
    }
  }, [props]);

  return getType();
};

export default CustomButton;
