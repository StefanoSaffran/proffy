import React, { FC, ReactNode } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container } from './styles';

interface IButtonProps extends RectButtonProperties {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
