import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moto from "../assets/moto.png"; 
import fancyCar from "../assets/big car.png";
import car from "../assets/car.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
const Chat = () => {
  const imgStyle = {
    height: "300px", 
    width: "400px", 
    objectFit: "contain", 
  };
  const navigate = useNavigate(); 


  const handleCar = () => {
    navigate("/car"); 
  };
  const handleFancyCar = () => {
    navigate("/fancycar");
  };
  const handleMoto = () => {
    navigate("/moto"); 
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    const handlePopState = () => {
      window.history.pushState(null, null, window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return (
    <Container className="d-flex flex-column  justify-content-center min-vh-100">
      <Row className="justify-content-center">
        {/* Box 1 */}
        <Col md={4} className="mb-10">
          <Card>
            <br />
            <Card.Img src={car} style={imgStyle} className="mx-auto d-block" />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Regular Car</Card.Text>
              <Button className="btn" onClick={handleCar}>
                Pick
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Box 2 */}
        <Col md={4} className="mb-4">
          <Card>
            <br />
            <Card.Img src={fancyCar} style={imgStyle} className="mx-auto d-block" />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Fancy Car</Card.Text>
              <Button className="btn" onClick={handleFancyCar}>
                Pick
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Box 3 */}
        <Col md={4} className="mb-4">
          <Card>
            <br />
            <Card.Img src={moto} style={imgStyle} className="mx-auto d-block" />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>Moto</Card.Text>
              <Button className="btn" onClick={handleMoto}>
                Pick
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;