import { Form, Stack, Alert, Col, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RiderLogin = () => {
  const { loginInfo, updateLoginInfo, loginRider, loginError, isLoginLoading } =
    useContext(authContext);

    const navigate = useNavigate(); 

    const register = () => {
      navigate("/riderRegister"); 
    };
  return (
    <>
    <center>
      you dont have an account ?
        <br /><Button className="btn" onClick={register}>
                RegIster
              </Button></center>
      <Form onSubmit={loginRider}>
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
                <h2>Login</h2>
              </center>
              <br />
              <Form.Control
                type="email"
                placeholder="Email ... ?"
                onChange={(e) => {
                  updateLoginInfo({ ...loginInfo, email: e.target.value });
                }}
              />
              <br />
              <Form.Control
                type="password"
                placeholder="PassWord ... ?"
                onChange={(e) => {
                  updateLoginInfo({ ...loginInfo, password: e.target.value });
                }}
              />
              <br />
              <Button
              className="loginBtn"
                type="submit"
                variant="primary"
              >
                {isLoginLoading ? "..." : "Login"}
              </Button>

              {loginError?.error && (
                <Alert variant="danger">
                  <center>
                    <p>{loginError?.message}</p>
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

export default RiderLogin;
