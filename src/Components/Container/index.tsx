import React from 'react';
import { Wrapper } from './Container.component';
const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
