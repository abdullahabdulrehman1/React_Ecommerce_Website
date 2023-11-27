import React from "react";
import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authRoute";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from "../spinners";
import { useDispatchContext, useStateContext } from "../../context/authRoute";

const Private = () => {
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

          if (res.data.ok) {
            setok(true);
          } else {
            localStorage.removeItem("token");
            setok(false);
          }
        }
      } catch (error) {
        setok(false);
      }

      setLoading(false); // Stop loading
    };

    Authcheck();
  }, [token]);

  if (loading) {
    return <Spinners />;
  }

  return ok ? <Outlet /> : <Spinners />;
};

export default Private;
