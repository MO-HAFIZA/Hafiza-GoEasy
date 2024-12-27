/* eslint-disable no-unused-vars */
import React, { useState , useEffect} from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Coffee = () => {
    const [flavor, setFlavor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

    const goAway = () => {
        navigate("/byebye"); 
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Input validation
        if (!flavor || quantity <= 0 ) {
            setMessage('Please fill in all fields with valid data.');
            return;
        }

        const orderData = { flavor, quantity };

        try {
            const response = await fetch('http://localhost:5000/api/coffee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(`Order created successfully! ID: ${result.order._id}`);
                // Reset form fields after successful order
                resetForm();
            } else {
                setMessage(`Failed to create order: ${result.message}`);
            }
        } catch (error) {
            setMessage('An error occurred while placing the order.');
        }

        goAway();
    };

    const resetForm = () => {
        setFlavor('');
        setQuantity(1);
        setCustomerName('');
        setAddress('');
    };
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);

    return (
        <Container className="mt-5">
            <center><h1>Order Coffee</h1></center>
            {message && <Alert variant="info">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="flavor">
                    <Form.Label>Coffee Flavor</Form.Label>
                    <Form.Control
                        as="select"
                        value={flavor}
                        onChange={(e) => setFlavor(e.target.value)}
                        required
                    >
                        <option value="">Select a flavor</option>
                        <option value="Espresso">Espresso</option>
                        <option value="Latte">Latte</option>
                        <option value="Cappuccino">Cappuccino</option>
                        <option value="Americano">Americano</option>
                        <option value="Mocha">Mocha</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="quantity" className="mt-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                        min="1"
                        required
                    />
                </Form.Group>



                <Button variant="primary" type="submit" className="mt-4">
                    Place Order
                </Button>
            </Form>
        </Container>
    );
};

export default Coffee;
