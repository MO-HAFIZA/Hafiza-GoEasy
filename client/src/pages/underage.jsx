import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const SendSMSForm = () => {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate(); 
  const chat = () => {
    navigate("/chat"); 
  };
  const handleSendSMS = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/send-sms', { to, message });
      if (response.data.success) {
        setStatus('SMS sent successfully!');
      } else {
        setStatus('Failed to send SMS.');
      }
    } catch (error) {
      setStatus('Error sending SMS: ' + error.message);
    }

    chat();
  };

  return (
    <Container>
      <h2>Send SMS Notification</h2>
      <Form onSubmit={handleSendSMS}>
        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send SMS
        </Button>
      </Form>
      {status && <p>{status}</p>}
    </Container>
  );
};

export default SendSMSForm;
