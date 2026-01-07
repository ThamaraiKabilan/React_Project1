import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StudentCard from '../components/StudentCard';

function StudentCardPage() {
  return (
    <div className="page clients-bg">
      <Container>
        <h1 className="mb-4">Sample Student Records</h1>
        <Row className="g-4">
          <Col md={4}>
            <StudentCard name="Ravi Kumar" department="1921CS001" cgpa={8.7} />
          </Col>
          <Col md={4}>
            <StudentCard name="Priya Singh" department="1921IT045" cgpa={7.3} />
          </Col>
          <Col md={4}>
            <StudentCard name="Amit Patel" department="1921EC112" cgpa={9.2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentCardPage;
