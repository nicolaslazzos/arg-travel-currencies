import React from "react";
import { Button as NButton, IButtonProps } from "native-base";

export interface ButtonProps extends IButtonProps {
  disabled?: IButtonProps["isDisabled"];
  loading?: IButtonProps["isLoading"];
  text?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { text, ...rest } = props;

  return <NButton children={text} {...rest} />;
};

export default Button;