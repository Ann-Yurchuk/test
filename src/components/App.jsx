import React from 'react';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { Info } from './Info/Info';
import { Menu } from './Menu/Menu';
import { Box } from './Menu/Menu.styled';
import { Likeable } from './Likeable/Likeable';

export const App = () => {
  return (
    <Container>
      <Header />
      <Likeable />
      <Box>
        <Info />
        <Menu />
      </Box>
    </Container>
  );
};
