/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Alert, Form, Button, Container } from 'react-bootstrap';
import { getDistance } from 'geolib'; // Import geolib for distance calculation

const RideTime = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [message, setMessage] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');

  const calculateETA = async (pickup, dropoff) => {
    try {
      const geocodeLocation = async (location) => {
        const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
          return {
            lat: data[0].lat,
            lon: data[0].lon,
          };
        } else {
          throw new Error("Location not found");
        }
      };
      
      const pickupCoords = await geocodeLocation(pickup);
      const dropoffCoords = await geocodeLocation(dropoff);

      
      const distance = getDistance(
        { latitude: pickupCoords.lat, longitude: pickupCoords.lon },
        { latitude: dropoffCoords.lat, longitude: dropoffCoords.lon }
      );

      
      const averageSpeed = 30; 
      const timeInHours = distance / 1000 / averageSpeed; 
      const timeInMinutes = Math.round(timeInHours * 60); 

      setEstimatedTime(`Estimated time: ${timeInMinutes} minutes`);
    } catch (error) {
      console.error("Error calculating ETA:", error);
      setEstimatedTime('Error calculating time');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await calculateETA(pickupLocation, dropoffLocation);
      setMessage(`Ride requested from ${pickupLocation} to ${dropoffLocation}`);
      setPickupLocation('');
      setDropoffLocation('');
    } catch (error) {
      console.error("Error processing ride request:", error);
      setMessage('Error processing ride request');
    }
  };

  return (
    <Container>
      <h1>Request a Ride</h1>
      {message && <Alert variant="info">{message}</Alert>}
      {estimatedTime && <Alert variant="success">{estimatedTime}</Alert>}
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

        <Button variant="primary" type="submit" className="mt-4">
          Request Ride
        </Button>
      </Form>
    </Container>
  );
};

export default RideTime;
