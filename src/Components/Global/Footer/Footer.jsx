import React, { useState } from 'react'
import logo from '../../../assest/images/logoFooter.png'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink } from '../../../Redux/Reducers/GlobalSlice';
import { NavbarData } from '../../DummyData/DummyData';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const activeLink = useSelector((state) => state.GlobalSlice.activeLink);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  const handleLinkClick = (value) => {
    dispatch(setActiveLink(value));
  };
  const onUpdateActiveLink = (value) => {
    dispatch(setActiveLink(value));
  }


  return (
    <footer className="footer py-2">
      <Container>
        <Row>
          <Col className="text-center py-5">
            <div className='footerImg m-auto'>
              <img src={logo} alt="logo" />
            </div>

            <Nav className="justify-content-center border-top py-3">
            {NavbarData.map((nav) => (
                < Link
                  key={nav.id}
                  title={nav.title}
                  to={nav.title === 'Home' ? '/' : `/${nav.title.toLowerCase()}`}
                  className={`nav-link ${toggleDark ? (activeLink === nav.title.toLowerCase() ? 'text-dark' : 'text-light') : (activeLink === nav.title.toLowerCase() ? 'text-light' : 'text-dark')} `}
                  onClick={() => onUpdateActiveLink(nav.title.toLowerCase())}
                >
                  {i18n.language === 'en' ? nav.title : nav.titleAr}
                  
                </Link>
              ))}
            </Nav>
            <div className="social-icons border-top pt-4 ">
              <a href="#twitter" className="mx-2 text-light"><FaTwitter size={23}/></a>
              <a href="#facebook" className="mx-2 text-light"><FaFacebookF size={23}/></a>
              <a href="#instagram" className="mx-2 text-light"><FaInstagram size={23}/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer