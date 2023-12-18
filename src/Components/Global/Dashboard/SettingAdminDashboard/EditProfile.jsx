import React, { useRef, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defultImg from '../../../../assest/images/default-placeholder.png'

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInput = useRef();

  console.log(imageInput.current);

  const handleImageChange = () => {
    imageInput.current.click();
  };

  const displayImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="container px-5 pb-3" style={{ borderTop: "2px solid rgb(236, 236, 236)" }}>
      <Row className="py-5 px-3 mt-3 rounded border rounded-4">
        <Col md={12} className="m-auto text-center">
          <div className="rounded-circle border shadow-sm m-auto text-center my-2" style={{ width: "200px", height: "200px" }}>
            <input
              type="file"
              onChange={displayImage}
              ref={imageInput}
              className='d-none'
            />
            <Image
              onClick={handleImageChange}
              src={(selectedImage && URL.createObjectURL(selectedImage)) || defultImg}
              alt='defult image'
              className="pointer rounded-circle"
              // style={{ height: '70%' }}
              style={{ width: "200px", height: "200px" }}
            />

          </div>
          <Col md={12}>
            <Button onClick={handleImageChange}
             variant='dark'>Change Profile Picture </Button>
          </Col>
        </Col>

        <Col md={12}>
          <Form className="mx-4 mt-4 py-2">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>User Email</Form.Label>
              <Form.Control type="email" placeholder="Type your email" className='rounded-3 border border-2' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Type your username" className='rounded-3 border border-2' />
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*************" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formRepeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="*************" />
              </Form.Group>
            </Row>

            <div className="text-end mt-5 ">
              <Link to="/allusers" className="btn btn-danger mx-2 px-5 text-decoration-none" style={{ borderRadius: "35px", fontSize: "20px" }}>Cancel</Link>
              <Link to="/allusers" className="btn btn-primary mx-2 px-5 text-decoration-none" style={{ borderRadius: "35px", fontSize: "20px" }}>Save</Link>
            </div>
          </Form>
        </Col>

      </Row>
    </div>
  );
}

export default EditProfile;
