import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { errorMsg, successMsg } from '../../Global/Toastify/Toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setUserRole } from '../../../Redux/Reducers/UserSlice';

const LoginForm = () => {
  const userRole = useSelector((state) => state.UserSlice.userRole);
  const login = useSelector((state) => state.UserSlice.login);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
  
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      errorMsg('Please fill in all required fields correctly.');
      return;
    }
  
    setValidated(true);
  
    const { email, password } = formData;
  
    const isAdminEmail = email === 'admin@gmail.com';
    const isCorrectPassword = password === '2212';
  
    if (isAdminEmail && isCorrectPassword) {
      dispatch(setUserRole('admin'));
      // console.log(userRole);
    } else {
      dispatch(setUserRole('user'));
      // console.log(userRole);

    }
  
    dispatch(setLogin(true));
    navigate('/');
    successMsg('Login successful!');
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (validated) {
      if (name === 'email' && !value) {
        errorMsg('Please enter a valid email.');
      } else if (name === 'password' && value.length < 4) {
        errorMsg('Password should be at least 4 characters.');
      }
    }
  };


  const handelShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form className="my-5 w-75 rounded m-auto bg-light p-5" onSubmit={handleSubmit} validated={validated}>
      <div className="container px-5 py-4">
        <div className='p-5 border rounded-5'>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.email}
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 position-relative">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.password}
            />
            <div
              className="login_right-icon clickable position-absolute"
              onClick={handelShowPassword}
              style={{ right: '20px', top: '40px' }}
            >
              {showPassword ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
            </div>
            <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className='w-100'>
            Login
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
