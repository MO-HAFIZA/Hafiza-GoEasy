import food from "../assets/food.png"
import { useNavigate } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const Food = () => {
    const imgStyle = {
        height: "300px", 
        width: "400px", 
        objectFit: "contain", 
      };
      const navigate = useNavigate(); 
      const handleFood = () => {
        navigate("/food"); 
      };
    return ( <>
         {/* Box 2 */}
         <Col md={4} className="mb-4">
         <Card>
            <br />
           <Card.Img src={food} style={imgStyle} className="mx-auto d-block" />
           <Card.Body>
             <Card.Text style={{ textAlign: "center" }}>Food</Card.Text>
             <Button className="btn" onClick={handleFood}>
               Pick
             </Button>
           </Card.Body>
         </Card>
       </Col>
       </>
    )
}

export default Food;