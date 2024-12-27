/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Nav, Navbar, Stack, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/GoEasy.webp'; 


const navBar = () => {
  const { user, logOutUser } = useContext(authContext);
  return (
    <Navbar
      className="nb-4"
      bg="dark" variant="dark" expand="lg" sticky="top"
      style={{ height: "7", backgroundColor: "#9EFFA9", color: "#9EFFA9" }}
    >
      <Container>
        <h1>
          <Image src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
          <span style={{ cursor: "pointer" }} className="glow"> GoEasy </span>
        </h1>

        <Nav>
          <Stack direction="horizontal" gap={5}>
            {user && (
              <>
                  <center><span id="wel">Welcome {user?.name} 😊</span></center>   
                  
                <Link
                  onClick={() => logOutUser()}
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  <h2 className="glow">LogOut</h2>
                </Link>
              </>
            )}
            {!user && (
              <>
              <span id="wel">Welcome {user?.name} 😊</span>
              </>
            )}
          </Stack>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navBar;
