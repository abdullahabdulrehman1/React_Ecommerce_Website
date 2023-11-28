import React, { useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/contact";
import Policy from "./components/pages/policy";
import Register from "./components/pages/Auth/register";
import Login from "./components/pages/Auth/login";
import { AuthProvider, useStateContext } from "./context/authRoute";
import ForgotPassword from "./components/pages/Auth/forgotpassword";
import AdminRoute from "./components/routes/adminroute";
import About from "./components/pages/About";
import AdminDashboard from "./components/pages/admin/admindashboard";
import { Spinner } from "flowbite-react";
import UserRoute from "./components/routes/userroute";
import UserDashboard from "./components/pages/user/userdashboard";
// import Admin from "./components/routes/adminroute";

const App = () => {
  const { user, role } = useStateContext();
  // console.log(role);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path={`/dashboard/user`}
          element={role === 1 ? <AdminRoute /> : <UserRoute />}
        >
          <Route
            index
            // path={Number(role == 0) ? "user" : "admin"}
            element={role === 0 ? <UserDashboard /> : <AdminDashboard />}
          />
        </Route>
        <Route path="/dashboard/admin" element={<AdminRoute />}>
          <Route index element={<AdminDashboard />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />

        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route
          path="/login"
          element={
            !user?.auth == true ? <Login /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="*"
          element={
            <Navigate to={user?.auth == true ? "/" : "/login"} replace />
          }
        />
        <Route path={`/dashboard/`} element={<Navigate to={`/`} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
