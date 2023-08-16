import React from 'react';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { InfoBox } from './Info/Info.styled';

export const App = () => {
  return (
    <Container>
      <Header />
      <InfoBox />
    </Container>
  );
};
