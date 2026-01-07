import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Home from './pages/Home';
import Products from './pages/Products';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Counter from './pages/Counter';
import StudentCardPage from './pages/StudentCardPage';
import Props from './pages/Props';
import Toggle from './pages/Toggle';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>React Demo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/counter">Counter</Nav.Link>
              <Nav.Link as={NavLink} to="/students">Student Cards</Nav.Link>
              <Nav.Link as={NavLink} to="/props">Props Form</Nav.Link>
              <Nav.Link as={NavLink} to="/toggle">Dark/Light</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/students" element={<StudentCardPage />} />
        <Route path="/props" element={<Props />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
