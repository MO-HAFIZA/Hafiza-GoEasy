import { Form, Stack, Alert, Col, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RiderRegister = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerRider,
    registerError,
    isRegisterLoading,} = useContext(authContext);

    const navigate = useNavigate(); 

    const login = () => {
      navigate("/riderLogin"); 
    };
  return (
    <>
    <center>
      you already have an account ?
        <br /><Button className="btn" onClick={login}>
                LogIn
              </Button></center>
      <Form onSubmit={registerRider}>
        <Row
          style={{
            height: "200vh",
            justifyContent: "center",
            paddingTop: "15%",
          }}
        >
          <Col xs={5}>
            <Stack gap={2}>
              <center>
                <h2>Register</h2>
              </center>
              <br />
              <Form.Control
                type="text"
                placeholder="Name ... ?"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <br />
              <Form.Control
                type="email"
                placeholder="Email ... ?"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <br />
              <Form.Control
                type="password"
                placeholder="PassWord ... ?"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <br />
              <Form.Control
                type="text"
                placeholder="National ID ... ?"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    ID: e.target.value,
                  })
                }
              />
              <br />
              <Button
              className="loginBtn"
                type="submit"
                variant="primary"
              >
                {isRegisterLoading ? "Creating account" : "Register"}
              </Button>

              {registerError?.error && (
                <Alert variant="danger">
                  <center>
                    <p>{registerError?.message}</p>
                  </center>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
      
    </>
  );
};

export default RiderRegister;
