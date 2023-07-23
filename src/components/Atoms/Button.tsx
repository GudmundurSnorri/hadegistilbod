import React, { ReactNode } from 'react';
import { Button as B } from '~/styles/Button';

type ButtonProps = {
  children: ReactNode;
};
const Button = ({ children }: ButtonProps) => {
  return (
    <B px={3} py={2}>
      {children}
    </B>
  );
};

export default Button;
