import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Esteticistas from "../pages/Esteticistas/Esteticistas";
import EsteticistaDetails from "../pages/Esteticistas/EsteticistaDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/esteticista-account/Dashboard";
import { Routes, Route } from "react-router-dom";
import ProtectedRounte from "./ProtectedRounte";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/esteticistas" element={<Esteticistas />} />
      <Route path="/esteticistas/:id" element={<EsteticistaDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRounte allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRounte>
        }
      />
      <Route
        path="/esteticistas/profile/me"
        element={
          <ProtectedRounte allowedRoles={["esteticista"]}>
            <Dashboard />
          </ProtectedRounte>
        }
      />
    </Routes>
  );
};

export default Routers;
