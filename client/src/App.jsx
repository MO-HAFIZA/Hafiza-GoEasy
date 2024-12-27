import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./pages/chat";
// import Login from "./pages/login";
// import Register from "./pages/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/navBar";
import { authContext } from "./context/AuthContext";
import { useContext } from "react";
import Ride from "./pages/ride";
import Food from "./pages/food";
import Coffee from "./pages/coffee";
import FancyCar from "./pages/fancyCar";
import Moto from "./pages/moto";
import Car from "./pages/car";
import Role from "./pages/role";
import RiderRegister from "./pages/riderRegister";
import RiderLogin from "./pages/riderLogin";
import DriverRegister from "./pages/driverRegister";
import DriverLogin from "./pages/driverLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Drivers from "./pages/drivers";
import UnderAge from "./pages/underage";
import RideRequest from "./components/reqMap";
import End from "./pages/End";
import Think from "./pages/Think";
import ThinkAgain from "./pages/ThinkAgian";
import GoodBaye from "./pages/GoodBaye";
import Run from "./pages/Run";
import Bye from "./pages/Bye";

function App() {
  const { user, registerInfo } = useContext(authContext);

  let age = 0;

  if (registerInfo.ID[0] == 2) age = 124 - registerInfo.ID.slice(1, 3)
  if (registerInfo.ID[0] == 3) age = 24 - registerInfo.ID.slice(1, 3)
console.log(age)
  return (
    <>
      <NavBar />
      
      <Container className="text">
        <Routes>
<Route path="/" element={<Role />} />
<Route 
  path="/riderRegister" element={ 
user ? (age >= 18 ? <Navigate to="/chat" /> : <Navigate to="/under" />) 
      : <RiderRegister /> 
  } 
/>
<Route 
  path="/riderLogin" element={ 
user ? (age >= 18 ? <Navigate to="/chat" /> : <Navigate to="/under" />) 
      : <RiderLogin /> 
  } 
/>
<Route 
  path="/driverRegister" 
  element={ 
    user 
      ? (age >= 18 ? <Navigate to="/drivers" /> : <Navigate to="/" />) 
      : <DriverRegister /> 
  } 
/>
<Route 
  path="/driverLogin" 
  element={ 
    user 
      ? (age >= 18 ? <Navigate to="/drivers" /> : <Navigate to="/" />) 
      : <DriverLogin /> 
  } 
/>

<Route path="/chat" element={<Chat />} />
<Route path="/under" element={<UnderAge />} />
<Route path="/drivers" element={<Drivers />} />

          <Route path="/ride" element={<Ride />} />
          <Route path="/food" element={<Food />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/fancycar" element={<FancyCar />} />
          <Route path="/moto" element={<Moto />} />
          <Route path="/car" element={<Car />} />
          <Route path="/drive" element={<Drivers />} />
          <Route path="/moto/rideRequest" element={<RideRequest />} />
          <Route path="/car/rideRequest" element={<RideRequest />} />
          <Route path="/fancycar/rideRequest" element={<RideRequest />} />
          <Route path="/preEnd" element={<End />} />
          <Route path="/goaway" element={<ThinkAgain />} />
          <Route path="/runaway" element={<Run />} />
          <Route path="/goaway2" element={<ThinkAgain />} />
          <Route path="/goaway3" element={<Bye />} />
          <Route path="/byebye" element={<Bye />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* The * is for any other page */}
        </Routes>
      </Container>
      
    </>
  );
}

export default App;
