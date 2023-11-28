import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from "../spinners";
import { useDispatchContext, useStateContext } from "../../context/authRoute";

const UserRoute = () => {
  const { user, token } = useStateContext();
  const dispatch = useDispatchContext();
  const [ok, setok] = useState(false);
  const [loading, setLoading] = useState(true); // Add this line

  useEffect(() => {
    const Authcheck = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
          axios.defaults.headers.common["Authorization"] = token;

          const res = await axios.get("http://localhost:8080/user-auth");
          console.log(res.data.message);
          console.log(res.data.ok);
          if (res.data.ok === true && user?.role == 0) {
            setok(true);
          } else {
            // localStorage.removeItem("token");
            // localStorage.removeItem('user');
            setok(false);
          }
        }
      } catch (err) {
        if (err.response && err.response.data.ok === false) {
          dispatch({
            type: "logout",
          });
          setok(false);
        }
      } finally {
        setLoading(false);
      }
    };
    Authcheck();
  }, [token]);

  if (loading) {
    return <Spinners />;
  }

  return ok ? <Outlet /> : <Spinners path={"/login"} />;
};

export default UserRoute;
