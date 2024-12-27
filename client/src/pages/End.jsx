import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Food from '../components/food';
import Coffee from '../components/coffee';
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const End = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate(); 
  const goAway = () => {
    navigate("/goaway"); 
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <br /><br /><br />
        <center><h1>Coffee or Food ? ... {user?.name}😊</h1></center>
      <Container className="d-flex flex-column  justify-content-center min-vh-100">
        <Row className="justify-content-center">
         <center>
         <Food/>
         <Coffee/>
         </center>
          </Row>
      </Container>

      <center><br /><br /><h1>Goaway 😔</h1><br /><Button onClick={goAway}>Goaway 😔</Button></center><br /><br />
    </>
  )
}

export default End
