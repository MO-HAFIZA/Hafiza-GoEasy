import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AccessDeniedPage() {
  return (
    <Container className="text-center" style={{ marginTop: '10vh' }}>
      <Row>
        <Col>
          <h1 className="display-3 text-danger">Error 403: Access Denied 🚫</h1>
          <p className="lead mt-3">
            Oops! It looks like you’ve wandered into a restricted area.
          </p>
          <p>
            Whether you took a wrong turn or clicked something by accident, this page isn’t for you.
          </p>
          <Button 
            href="/" 
            variant="primary" 
            className="mt-3" 
            size="lg"
          >
            Go Back Home
          </Button>
          <Button 
            href="/support" 
            variant="outline-secondary" 
            className="mt-3 ms-2" 
            size="lg"
          >
            Contact Support
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AccessDeniedPage;
