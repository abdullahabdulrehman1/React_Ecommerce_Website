// import * as React from "react";
import axios from "axios";
import { useStateContext } from "../../context/authRoute";
import Layout from "../layout/layout";
import React, { useEffect } from "react";
// import { useAuth } from "../../context/authRoute";
// import { useAuth } from "../../context/authRoute";
const Home = () => {
  const { user, token, auth } = useStateContext();
  return (
    <Layout title={"Home | Ecommerce"}>
      <main>
        <div className="container mx-auto">
          <h1 className="text-3xl my-6 ">HomePage</h1>
          <h2>Auth: {user && user?.auth ? "Logged in" : "Not logged in"}</h2>
          <h2>
            Auth: {user && user?.auth ? JSON.stringify(auth) : "Not logged in"}
          </h2>
          <h2 className="break-all">
            User: {user ? JSON.stringify(user) : "No user"}
          </h2>
          <p className="break-all">Token: {token ? token : "No token"}</p>
          <h2>Role: {token ? user.role : "0"}</h2>
          <h2>Password: {user ? user.password : "No password"}</h2>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
