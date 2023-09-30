import React from "react";
import type { NextPage } from "next";
//import ProductForm from "./components/ProductForm";
import "bootstrap/dist/css/bootstrap.css";

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>Product Form</h1>
      <ProductForm />
    </div>
  );
};

export default IndexPage;
