import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import DriverPhoto from "../assets/DriverPhoto.png"; 


const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const baseUrl = 'http://localhost:5000/api';

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/drivers/findDrivers`);
        console.log('Fetched drivers:', response.data); 
        setDrivers(response.data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchDrivers();
  }, [baseUrl]);


  const navigate = useNavigate(); 
    
      const handleRide = () => {
        if (location.pathname == "/car") {
          navigate("/car/rideRequest"); 
        }
        else if (location.pathname == "/fancycar") {
          navigate("/fancycar/rideRequest"); 
        }
        else if (location.pathname == "/moto") {
          navigate("/moto/rideRequest"); 
        }
      };

  return (
    <Container>
      <Row>
        {Array.isArray(drivers) && drivers.length > 0 ? (
          drivers.map((driver) => (
            <Col md={4.5} key={driver._id}>
              <Card style={{ marginBottom: '1rem' }}>
                <Card.Body>
                  {/* <Card.Img variant="top" src={DriverPhoto} /> */}
                  <Card.Title><center><h1>{driver.name}</h1></center></Card.Title>
                  <Card.Text>
                    Email: {driver.email}<br />
                    {/* ID: {driver.ID} */}
                  </Card.Text>
                  <Button variant="primary" onClick={handleRide}>
                    Request Ride
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No drivers available</p>
        )}
      </Row>
    </Container>
  );
};

export default DriverList;
