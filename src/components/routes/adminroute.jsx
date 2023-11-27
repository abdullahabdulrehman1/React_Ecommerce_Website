import React from "react";
import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authRoute";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinners from "../spinners";
import AdminDashboard from "../pages/admin/admindashboard";
import { useDispatchContext, useStateContext } from "../../context/authRoute";
const Admin = () => {
  const { user, token }  = useStateContext();
  const dispatch = useDispatchContext();
  const [ok, setok] = useState(false);
  const [loading, setLoading] = useState(true); // Add this line

  useEffect(() => {
    const Authcheck = async () => {
      setLoading(true); // Start loading

      try {
        const token = localStorage.getItem('token'); // Get token from local storage

        if (token) {
          axios.defaults.headers.common["Authorization"] = token;
          const res = await axios.get("http://localhost:8080/admin-auth");

          if (res.data.ok) {
            setok(true);
          } else {
            // The token is invalid, remove it from local storage
            localStorage.removeItem('token');
            setok(false);
          }
        } else {
          setok(false);
        }
      } catch (error) {
        console.log(error)
        // An error occurred, remove the token from local storage
        localStorage.removeItem('token');
        setok(false);
      }

      setLoading(false); // Stop loading
    };

    Authcheck();
  }, []);
  if (loading) {
    return <Spinners />;
  }

  return ok ? <Outlet /> : <Spinners path="/"/>;
};

export default Admin;