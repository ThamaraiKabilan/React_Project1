import React from 'react';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="page home-bg">
      <Container>
        <h1>Welcome to React Demo</h1>
        <p>Single page application with multiple routes and theme toggle.</p>
      </Container>
    </div>
  );
}

export default Home;
