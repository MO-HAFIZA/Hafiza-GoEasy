// DriverDashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import start from "../assets/start.png"; 
import request from "../assets/request.png"; 
import income from "../assets/income.png"; 


const DriverDashboard = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <center><h2>Welcome, Driver!</h2><br />
          <p>Here is your dashboard to get started with your shifts, check ride requests, and view earnings.</p>
          <br /></center>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
                <Card.Img src={start}  className="mx-auto d-block" />
              <Card.Title>Start Shift</Card.Title>
              <Card.Text>Go online to start receiving ride requests.</Card.Text>
              <Button variant="success">Go Online</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
                <Card.Img src={request}  className="mx-auto d-block"  />
              <Card.Title>Ride Requests</Card.Title>
              <Card.Text>View and manage incoming ride requests.</Card.Text>
              <Button variant="primary">View Requests</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
                <Card.Img src={income}  className="mx-auto d-block" />
              <Card.Title>Earnings</Card.Title>
              <Card.Text>Check your earnings and recent transactions.</Card.Text>
              <Button variant="info">View Earnings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default DriverDashboard;
