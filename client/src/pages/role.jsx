import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import rider from "../assets/rider.png";
import driver from "../assets/driver.png";
const Role = () => {
    const imgStyle = {
        height: "300px", 
        width: "400px", 
        objectFit: "contain", 
      };
      const navigate = useNavigate(); 

      const handleRider = () => {
        navigate("/riderRegister"); 
      };
      const handleDriver = () => {
        navigate("/driverRegister");
      };
    return (
        <>
        <br/>
        <center><h1>Choose the role</h1></center>
        
    <Container className="d-flex flex-column  justify-content-center min-vh-100">
      <Row className="justify-content-center">
        {/* Box 1 */}
        <Col md={4} className="mb-10">
          <Card>
            <br />
            <Card.Img src={rider} style={imgStyle} className="mx-auto d-block" />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Rider</Card.Text>
              <Button className="btn" onClick={handleRider}>
                Pick
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Box 2 */}
        <Col md={4} className="mb-4">
          <Card>
            <br />
            <Card.Img src={driver} style={imgStyle} className="mx-auto d-block" />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Driver</Card.Text>
              <Button className="btn" onClick={handleDriver}>
                Pick
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        </>
    )
}

export default Role;