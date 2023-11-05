import React, { useCallback } from "react";
import { InputProps } from "./types";
import {
  LoginContainer,
  CustomLoginLabel,
  CustomAuthInput,
} from "./variants/loginInput.styles";
import {
  FormBasicContainer,
  FormBasicInput,
  FormBasicLabel,
} from "./variants/formBasic.styles";

const CustomInput: React.FC<InputProps> = (props) => {
  const { variant, type, htmlFor, label, value, ...rest } = props;

  const getType = useCallback(() => {
    switch (variant) {
      case "login":
        return (
          <LoginContainer>
            <CustomLoginLabel htmlFor={htmlFor}>{label}</CustomLoginLabel>
            <CustomAuthInput type={type} value={value} {...rest} />
          </LoginContainer>
        );

      case "formBasic":
        return (
          <FormBasicContainer>
            <FormBasicLabel htmlFor={htmlFor}>{label}</FormBasicLabel>
            <FormBasicInput type={type} value={value} {...rest} />
          </FormBasicContainer>
        );

      default:
        return <input {...props} />;
    }
  }, [props]);

  return getType();
};

export default CustomInput;
