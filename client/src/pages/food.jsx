/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Food = () => {
  const [foodItem, setFoodItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 
  const goAway = () => {
    navigate("/byebye"); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = { foodItem, quantity, customerName, address };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`Order created successfully! ID: ${result.order._id}`);
      } else {
        setMessage(`Failed to create order: ${result.message}`);
      }
    } catch (error) {
      setMessage("An error occurred while placing the order.");
    }

    goAway();
  };

  return (
    <>
      <Container className="mt-5">
        <center>
          <h1>Order Food</h1>
        </center>
        {message && <Alert variant="info">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="foodItem">
            <Form.Label>Food Item</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter food item"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="quantity" className="mt-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </Form.Group>


          <Button variant="primary" type="submit" className="mt-4">
            Place Order
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Food;
