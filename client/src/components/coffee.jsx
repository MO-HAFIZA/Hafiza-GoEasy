import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import coffee from "../assets/coffee.png"

function Coffee() {
    const navigate = useNavigate(); 

    const handleCoffee = () => {
      navigate("/coffee"); 
    };
    const imgStyle = {
        height: "300px", 
        width: "400px", 
        objectFit: "contain", 
      };
    
  return (
    <div>
      {/* Box 3 */}
      <Col md={4} className="mb-10">
            <Card>
                <br/>
              <Card.Img
                src={coffee}
                style={imgStyle}
                className="mx-auto d-block"
              />
              <Card.Body>
                <Card.Text style={{ textAlign: "center" }}>Coffee</Card.Text>
                <Button className="btn" onClick={handleCoffee}>
                  Pick
                </Button>
              </Card.Body>
            </Card>
          </Col>
    </div>
  )
}

export default Coffee
