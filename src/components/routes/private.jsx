import React from "react";
import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authRoute";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from "../spinners";
import { useDispatchContext, useStateContext } from "../../context/authRoute";

const Private = () => {

  
  const { user, token }  = useStateContext();
  const dispatch = useDispatchContext();
  const [ok, setok] = useState(false);
  useEffect(() => {
    const Authcheck = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.get("http://localhost:8080/user-auth");

        if (res.data.ok ) {
          setok(true);
      
        } else {
          setok(false);
        
        }
      } catch (error) {
        setok(false);
      }
    };
    Authcheck();
    // console.log(ok)
    
  }, [token]);
  console.log(ok)
  return ok ? <Outlet /> : <Spinners />;
};

export default Private;
