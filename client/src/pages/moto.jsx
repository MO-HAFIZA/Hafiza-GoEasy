/* eslint-disable no-unused-vars */
import React, { useState, useRef} from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Coffee from "../components/coffee"
import Food from "../components/food"
import RideRequestMap from "../components/rideMap";
import DriverList from "../components/drivers";

const Moto = () => {
  const { user } = useContext(authContext);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rideData = { pickupLocation, dropoffLocation, passengerName };

    try {
      const response = await fetch("http://localhost:5000/api/rides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      setMessage("An error occurred while creating the ride request.");
    }


};

  const resetForm = () => {
    setPickupLocation("");
    setDropoffLocation("");
    setPassengerName("");
  };

  // -------------------------------------------------------------------------------------------------------
  const imgStyle = {
    height: "300px", // Set a consistent height
    width: "400px", // Full width of the card
    objectFit: "contain", // Maintain aspect ratio and fill the space
  };


// ---------------------------------------------------------------------------------------------------------
const geocodeLocation = async (location) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
        return {
            lat: data[0].lat,
            lon: data[0].lon,
        };
    }
    throw new Error('Location not found');
};






  return (
    <>
    {/* <MapComponent/>
    <RideRequestMap/>
      <Container>
        <h2>{user?.ID}</h2>
        <center>
          <h1>Request a Ride</h1>
        </center>
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


          <Button variant="primary" type="submit" className="mt-4">
            Request Ride
          </Button>
        </Form>
      </Container>
      <br /><br />
        <center><h1>Coffee or Food ? ... {user?.name}😊</h1></center>
      <Container className="d-flex flex-column  justify-content-center min-vh-100">
        <Row className="justify-content-center">
         <center>
         <Food/>
         <Coffee/>
         </center>
          </Row>
      </Container> */}
      <br /><br />
      <DriverList />
    </>
  );
};

export default Moto;
