import React from "react";
import { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinners from "../spinners";
import AdminDashboard from "../pages/admin/admindashboard";
import { useDispatchContext, useStateContext } from "../../context/authRoute";
import UserRoute from "./userroute";
const AdminRoute = () => {
  const { user, token, role } = useStateContext();
  const dispatch = useDispatchContext();
  const [ok, setok] = useState(false);
  const [loading, setLoading] = useState(true); // Add this line
  const navigate = useNavigate();
  useEffect(() => {
    const Authcheck = async () => {
      setLoading(true); // Start loading

      try {
        const token = localStorage.getItem("token"); // Get token from local storage

        if (token) {
          axios.defaults.headers.common["Authorization"] = token;
          const res = await axios.get("http://localhost:8080/admin-auth");
          // console.log(res.data.ok);
          // console.log("this" + role);
          if (res.data.ok == true) {
            setok(true);
          } else {
            // The token is invalid, remove it from local storage
            setok(false);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }
        } else {
          setok(false);
        }
      } catch (error) {
        // An error occurred, remove the token from local storage

        if (error && role == 0) {
          setok(false);
          // console.log("role = 0 error " + error);
          // navigate(<UserRoute/>);
        } else if (error && role == 1) {
          console.log(error);
          dispatch({
            type: "logout",
          });
          // localStorage.removeItem("token");
          // localStorage.removeItem("user");
        }
      }

      setLoading(false); // Stop loading
    };

    Authcheck();
  }, []);
  if (loading) {
    return <Spinners />;
  }

  return ok ? <Outlet /> : <Spinners path={"/login"} />;
};

export default AdminRoute;
