
import React from "react";
import { Container, Stack, IBoxProps } from "native-base";

export interface CardProps extends IBoxProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};