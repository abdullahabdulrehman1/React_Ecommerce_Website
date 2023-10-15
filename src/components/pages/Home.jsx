// import * as React from "react";
import Layout from "../layout/layout";
import React from 'react';
// import { useAuth } from "../../context/authRoute";
import { useAuth } from "../../context/authRoute";
const Home = () => {
  const [auth,setauth] = useAuth();
  return (
    <>
      <Layout title={"Home | Ecommerce"}>
        <main>
          <h1 className="text-3xl border bg-orange-500 border-red-600 underline">HomePage</h1>
          <pre>{JSON.stringify(auth,"","",4)}</pre>
        </main>
      </Layout>
    </>
  );
};

export default Home;
