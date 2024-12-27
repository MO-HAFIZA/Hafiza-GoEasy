import { useState } from 'react';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import axios from 'axios';

const ContractForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const baseUrl = 'http://localhost:5000/api';

  const handleAgreement = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAgreed) {
      try {
        await axios.post(`${baseUrl}/contracts`, {
          agreementText: "Your contract terms here...",
        });
        setShowSuccess(true);
      } catch (error) {
        console.error("Error saving contract agreement:", error);
        setError("Failed to save the contract. Please try again later.");
      }
    } else {
      alert("Please agree to the contract terms.");
    }
  };

  return (
    <div>
      <h2>Driver Contract Agreement</h2>

      {/* Modal to display terms and conditions */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p>Terms and Conditions of Driver Agreement...</p>
        </Modal.Body>
      </Modal>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="agreementCheckbox">
          <Form.Check
            type="checkbox"
            label="I have read and agree to the terms and conditions."
            checked={isAgreed}
            onChange={handleAgreement}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!isAgreed}>
          Accept and Submit
        </Button>
      </Form>

      {showSuccess && <Alert variant="success">Contract accepted successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
};

export default ContractForm;
