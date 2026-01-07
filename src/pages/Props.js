import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import StudentCard from '../components/StudentCard';

function Props() {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    cgpa: ''
  });
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
  };

  return (
    <div className="page props-bg">
      <Container>
        <h1 className="mb-4">Student Details Form</h1>

        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Reg No</Form.Label>
                <Form.Control
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  placeholder="e.g. 1921CS001"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>CGPA</Form.Label>
                <Form.Control
                  type="number"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="0-10"
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" size="lg">
                  Generate Student Card
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        {showCard && formData.cgpa && (
          <Row className="justify-content-center mt-5">
            <Col md={6}>
              <StudentCard
                name={formData.name}
                department={formData.regNo}
                cgpa={parseFloat(formData.cgpa)}
              />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Props;
