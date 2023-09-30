import React from 'react';
import type { NextPage } from 'next';
import ProductForm from '../components/ProductForm';
import { Row, Col, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage: NextPage = () => {

  return (
    <Container>
    <Row className="mt-2">
    <Col lg={3} md={3}></Col>
    <Col lg={6} md={6}>
    <div className="well">
      <h2>Product Form</h2>
      <ProductForm />
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default IndexPage;
