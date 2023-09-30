"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button } from "react-bootstrap";
import { Products } from "../app/schemas/models/clients/products.schema";
import * as yup from "yup";

const ProductForm: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const productsYupSchema: yup.Schema<Products> = yup.object().shape({
    productNum: yup.number().required(),
    name: yup.string().required(),
    price: yup
      .number()
      .required()
      .default(0),
    stock: yup
      .number()
      .required()
      .default(0),
    avgCost: yup
      .number()
      .required()
      .default(0),
    isAtomic: yup
      .boolean()
      .required()
      .default(true),
    categories: yup.object().required(),
    productTree: yup.array(
      yup.object().shape({
        product: yup.string().required(),
        quantity: yup.number().required()
      })
    )
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Products>({
    resolver: yupResolver(productsYupSchema)
  });

  const onSubmit = async (data: Products) => {
    // setIsSubmitting(true);
    // setSuccessMessage("");
    // // Submit the form data to your API
    // const response = await fetch("/api/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // });
    // if (response.ok) {
    //   setSuccessMessage("Product created successfully!");
    // } else {
    //   // Handle error
    // }
    // setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-2">
        <Form.Label>Product Number</Form.Label>
        <Form.Control type="number" min={0} {...register("productNum")} />
        {errors.productNum && (
          <span className="text-danger">{errors.productNum.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" {...register("name")} />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" min={0} {...register("price")} />
        {errors.price && (
          <span className="text-danger">{errors.price.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" min={0} {...register("stock")} />
        {errors.stock && (
          <span className="text-danger">{errors.stock.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Average Cost</Form.Label>
        <Form.Control type="number" min={0} {...register("avgCost")} />
        {errors.avgCost && (
          <span className="text-danger">{errors.avgCost.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Check
          label="Is Atomic?"
          type="checkbox"
          {...register("isAtomic")}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Categories</Form.Label>
        <Form.Control type="textarea" {...register("categories")} />
        {errors.categories && (
          <span className="text-danger">{errors.categories.message}</span>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Product Tree</Form.Label>
        <Form.Control type="textarea" {...register("productTree")} />
        {errors.productTree && (
          <span className="text-danger">{errors.productTree.message}</span>
        )}
      </Form.Group>

      <Button type="submit" className="mt-2" disabled={isSubmitting}>
        Submit
      </Button>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
    </Form>
  );
};

export default ProductForm;
