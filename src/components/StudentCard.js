import React from 'react';
import Card from 'react-bootstrap/Card';

function StudentCard({ name, department, cgpa }) {
  const status = cgpa >= 8 ? 'Excellent' : 'Needs Improvement';

  return (
    <Card className="student-card shadow-sm">
      <Card.Body>
        <Card.Title>Student Name: {name}</Card.Title>
        <Card.Text>Reg No: {department}</Card.Text>
        <Card.Text>CGPA: {cgpa}</Card.Text>
        <Card.Text><strong>Status: {status}</strong></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
