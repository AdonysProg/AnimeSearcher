import React from 'react';
import Header from './Components/Header';
import Container from './Components/Container';
import Form from './Components/Form';

export default function NestedGrid() {
  return (
    <>
      <Header />
      <Container>
        <Form />
      </Container>
    </>
  );
}
