import React from "react";
// import {  Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { redirectedirect } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
// import { RedirectFunction } from 'react-router-dom';
import Policy from "./components/pages/policy";
import Register from "./components/pages/Auth/register";
import Login from "./components/pages/Auth/login";
import Dashboard from "./components/pages/user/dashboard";
// import PrivateRoute from './';
import Private from "./components/routes/private";
import { AuthProvider, useAuth } from "./context/authRoute";

const App = () => {
  // const [auth, setauth] = useAuth();
  // const [auth, setauth] = useAuth();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Private />} >

          <Route path="" element={<Dashboard />} />

          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
