import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Products() {
  const products = [
    { name: 'Laptop', desc: 'High performance laptop' },
    { name: 'Mouse', desc: 'Wireless gaming mouse' },
    { name: 'Keyboard', desc: 'Mechanical keyboard' }
  ];

  return (
    <div className="page products-bg">
      <Container>
        <h1 className="mb-4">Our Products</h1>
        <Row className="g-4">
          {products.map((product, i) => (
            <Col key={i} md={4}>
              <Card className="student-card h-100">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.desc}</Card.Text>
                  <Button variant="primary">₹{i * 1000 + 5000}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
