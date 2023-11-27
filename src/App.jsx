import React, { useState } from "react";
// import {  Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import {
  Route,
  BrowserRouter,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
// import { redirectedirect } from 'react-router-dom';
import Home from "./components/pages/Home";
// import About from "./components/pages/about.jsx";
import Contact from "./components/pages/contact";
// import { RedirectFunction } from 'react-router-dom';
import Policy from "./components/pages/policy";
import Register from "./components/pages/Auth/register";
import Login from "./components/pages/Auth/login";
import Dashboard from "./components/pages/user/dashboard";

import Private from "./components/routes/private";
import { AuthProvider, useStateContext } from "./context/authRoute";
import ForgotPassword from "./components/pages/Auth/forgotpassword";
import AdminRoute from "./components/routes/adminroute";
import About from "./components/pages/About";
import AdminDashboard from "./components/pages/admin/admindashboard";
import { Spinner } from "flowbite-react";
// import GuestRoute from "./components/routes/guestroutes";

const App = () => {
  // const [auth, setauth] = useAuth();
  // const [auth, setauth] = useAuth();
  const { auth, user, role } = useStateContext();
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Private />}>
          <Route
            path={Number(role == 0) ? "user" : "admin"}
            element={Number(role == 0) ? <Dashboard /> : <AdminDashboard />}
          />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />

        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route
          path="/login"
          element={!auth ? <Login /> : <Navigate to="/" replace />}
        />
        {/* <GuestRoute path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
