import React from 'react';
import { Container } from 'react-bootstrap';

function Portfolio() {
  return (
    <div className="page portfolio-bg">
      <Container>
        <h1 className="mb-4">Portfolio</h1>
        <p>Recent projects built with React and Bootstrap.</p>
        <ul className="list-unstyled">
          <li>✅ E-commerce Website</li>
          <li>✅ Task Management App</li>
          <li>✅ Admin Dashboard</li>
        </ul>
      </Container>
    </div>
  );
}

export default Portfolio;
