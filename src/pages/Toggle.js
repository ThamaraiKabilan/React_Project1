import React, { useState, useEffect } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';

function Toggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className="page toggle-bg">
      <Container className="text-center">
        <h1 className="mb-4">Dark/Light Theme Toggle</h1>

        <div className="mb-4">
          <h2>Current Theme: <strong>{dark ? 'Dark' : 'Light'}</strong></h2>
          <p>Use this button to switch theme for the whole app.</p>
        </div>

        <Button
          variant={dark ? 'outline-light' : 'outline-dark'}
          size="lg"
          className="px-5"
          onClick={toggleTheme}
        >
          {dark ? 'Switch to Light' : 'Switch to Dark'}
        </Button>

        <Alert
          variant={dark ? 'dark' : 'info'}
          className="mt-4 mx-auto"
          style={{ maxWidth: '500px' }}
        >
          After changing theme, go to other pages to see the effect.
        </Alert>
      </Container>
    </div>
  );
}

export default Toggle;
