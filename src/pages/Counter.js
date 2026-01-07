import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="page counter-bg">
      <Container className="text-center">
        <h1 className="mb-4">Counter App</h1>
        <h2 className="mb-3">{count}</h2>
        <div className="d-flex justify-content-center gap-2">
          <Button
            variant="success"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </Button>
          <Button
            variant="danger"
            onClick={() => setCount(prev => Math.max(0, prev - 1))}
          >
            Decrement
          </Button>
          <Button
            variant="secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Counter;
