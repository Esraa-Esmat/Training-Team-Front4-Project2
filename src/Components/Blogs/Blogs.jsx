import React from 'react'


import "./Blogs.css";
import MainTitle from './MainTitle';
import BlogCard from './BlogCard';
import BlogsFeatured from '../../assest/images/Blogs Featured Image.png'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CTA from '../Global/CTA/CTA';

const Blogs = () => {
  return (
    <>
      <MainTitle />
      <Container className='p-4 rounded-5 '>
        <Card className="d-flex align-items-center rounded-5" style={{ border: "1px solid rgb(55, 182, 255)" }}>
          <Row className="justify-content-center align-items-center container">
            <Col md={4}>
              <div className="box-image">
                <Card.Img variant="top" src={BlogsFeatured} alt="Blogs Featured" />
              </div>
            </Col>
            <Col md={8}>

              <Card.Body className="box-text ">
                <Card.Title>Lorem ipsum dolor sit amet</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Card.Text>
                <Link className='text-dark'>Read More</Link>
              </Card.Body>

            </Col>
          </Row>
        </Card>
      </Container>
      <div className="container p-4">
        <Row className="m-md-auto">
          <BlogCard />
          <BlogCard />
          <BlogCard />

          <BlogCard />
          <BlogCard />
          <BlogCard />

          <BlogCard />
          <BlogCard />
          <BlogCard />

        </Row>
      </div>
      <CTA/>
    </>
  );
}

export default Blogs