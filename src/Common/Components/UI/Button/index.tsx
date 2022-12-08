import React from "react";

import { StyledButton } from "../styled/Button.styled";

export interface IProps {
  size?: "sm" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}

export type ButtonProps = IProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    children,
    variant,
    textTransform = "uppercase",
    ...otherProps
  } = props;

  return (
    <StyledButton
      {...otherProps}
      variant={variant}
      textTransform={textTransform}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
