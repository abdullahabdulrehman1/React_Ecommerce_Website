// import * as React from "react";
import { useStateContext } from "../../context/authRoute";
import Layout from "../layout/layout";
import React from 'react';
// import { useAuth } from "../../context/authRoute";
// import { useAuth } from "../../context/authRoute";
const Home = () => {
  const {  user, token } = useStateContext();

  return (
    <Layout title={"Home | Ecommerce"}>
      <main>
        <h1 className="text-3xl border bg-orange-500 border-red-600 underline">HomePage</h1>
        <h2>Auth: {user && user.auth ? 'Logged in' : 'Not logged in'}</h2>
        <h2>User: {user ? JSON.stringify(user ) : 'No user'}</h2>
        <h2>Token: {token ? token : 'No token'}</h2>
        <h2>Role: {token ? user.role : '0'}</h2>
        <h2>Password: {user ? user.password : 'No password'}</h2>
      </main>
    </Layout>
  );
};
export default Home;
