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
import CreateCategory from "./components/pages/admin/createcategory";
import CreateProduct from "./components/pages/admin/createproduct";
import User from "./components/pages/admin/user";
import Order from "./components/pages/user/order";
import UserProfile from "./components/pages/user/profile";
// import Admin from "./components/routes/adminroute";

const App = () => {
  const { user, role } = useStateContext();
  // console.log(role);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path={`/dashboard/`} element={<UserRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<UserProfile />} />
        </Route>
        <Route path={`/dashboard/`} element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/allusers" element={<User />} />
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
