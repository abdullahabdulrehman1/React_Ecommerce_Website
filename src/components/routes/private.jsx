import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/authRoute";
import { Outlet } from "react-router-dom";
import axios from "axios";

import Spinners from "../spinners";

const Private = () => {
  const [ok, setok] = useState(false);
  const [auth, setauth] = useAuth();
  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const Authcheck = async () => {
      try {
        const res = await axios.get("http://localhost:8080/user-auth");
        if (res.data.ok) {
          setok(true);
        } else {
          setok(false);
        }
      } catch (error) {
        setok(false);
      }
    };
    if (auth?.token) {
      Authcheck();
    }
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinners />;
};

export default Private;