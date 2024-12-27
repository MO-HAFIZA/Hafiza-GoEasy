/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { authContext } from '../context/AuthContext';



const Ride = () => {
    const { user } = useContext(authContext);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [passengerName, setPassengerName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const rideData = { pickupLocation, dropoffLocation, passengerName };

        try {
            const response = await fetch('http://localhost:5000/api/rides', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rideData),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(`Ride request created successfully! ID: ${result.ride._id}`);
                // Reset form fields after successful order
                resetForm();
            } else {
                setMessage(`Failed to create ride request: ${result.message}`);
            }
        } catch (error) {
            setMessage('An error occurred while creating the ride request.');
        }
    };

    const resetForm = () => {
        setPickupLocation('');
        setDropoffLocation('');
        setPassengerName('');
    };

    return (
        <Container className="mt-5">
            <h2>{user?.ID}</h2>
            <center><h1>Request a Ride</h1></center>
            {message && <Alert variant="info">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="pickupLocation">
                    <Form.Label>Pickup Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter pickup location"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="dropoffLocation" className="mt-3">
                    <Form.Label>Dropoff Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter dropoff location"
                        value={dropoffLocation}
                        onChange={(e) => setDropoffLocation(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="passengerName" className="mt-3">
                    <Form.Label>Passenger Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                    Request Ride
                </Button>
            </Form>
        </Container>
    );
};

export default Ride;
