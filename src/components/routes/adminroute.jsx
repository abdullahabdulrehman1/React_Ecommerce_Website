import React from "react";
import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authRoute";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from "../spinners";
import AdminDashboard from "../pages/admin/admindashboard";
import { useDispatchContext, useStateContext } from "../../context/authRoute";

const Admin = () => {
  const [ok, setok] = useState(false);
  // const [auth, setauth] = useAuth();
  const {token} = useStateContext();
  const dispatch = useDispatchContext();
  useEffect(() => {
    const Authcheck = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.get("http://localhost:8080/admin-auth");

        if (res.data.ok) {
          setok(true);
        } else {
          setok(false);
        }
      } catch (error) {
        console.log(error)
        setok(false);
      }
    };
    
    Authcheck();
    console.log(ok)
    
  }, [token]);
  return ok ? <Outlet /> : <Spinners path="/"/>;
};
export default Admin;
