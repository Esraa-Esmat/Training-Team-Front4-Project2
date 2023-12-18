import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logoForLight from '../../../assest/images/Logo Text.png'
import logoForDark from '../../../assest/images/logoFooter.png'
import './Header.css';
import { FaUserAlt, FaBars, FaGlobe } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setActiveLink } from '../../../Redux/Reducers/GlobalSlice';
import { NavbarData } from '../../DummyData/DummyData';
import { setLogin, setLogout } from '../../../Redux/Reducers/UserSlice';

/*
npm install i18next react-i18next
*/


const Header = () => {

  const activeLink = useSelector((state) => state.GlobalSlice.activeLink);

  const [showDropdown, setShowDropdown] = useState(false);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector((state) => state.UserSlice.login);
  const userRole = useSelector((state) => state.UserSlice.userRole);
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  const handleLogout = () => {
    dispatch(setLogout(false));

  };
  const onUpdateActiveLink = (value) => {
    // setActiveLink(value);
    dispatch(setActiveLink(value));

  }
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = i18n.dir(newLanguage);

  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };
  const handleDashboard = () => {
    userRole == 'admin' ? navigate('/useradmindashboard'):navigate('/servicesuserdashboard')
  }

  return (

    <>
      <Navbar bg={toggleDark ? 'dark' : 'light'} expand="lg" className="headerNavbar border-bottom border-primary py-3 fixed-top position-relative">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={toggleDark ? logoForDark : logoForLight} alt="Logo" className='ImgLogo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-dark">
              {NavbarData.map((nav) => (
                < Link
                  key={nav.id}
                  title={nav.title}
                  to={nav.title === 'Home' ? '/' : `/${nav.title.toLowerCase()}`}
                  className={`nav-link ${toggleDark ? (activeLink === nav.title.toLowerCase() ? 'text-primary' : 'text-light') : (activeLink === nav.title.toLowerCase() ? 'text-primary' : 'text-dark')}`}
                  onClick={() => onUpdateActiveLink(nav.title.toLowerCase())}
                >
                  {i18n.language === 'en' ? nav.title : nav.titleAr}
                </Link>
              ))}

            </Nav>


            <Nav className=" align-items-center">

              {!login ? (<>
                <Button className='bg-light text-primary px-4' onClick={handleLogin}>{t('Login')}</Button>
                <Button className='px-4 mx-2' onClick={handleSignUp}>{t('SignUp')}</Button>
              </>
              ) : (
                <>

                  <FaUserAlt size={20} />
                  <div className="dropdown">
                    <div className="bars-icon" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                      <FaBars size={20} className="mx-1" />
                    </div>
                    <Dropdown show={showDropdown} align="end" className="mt-1">
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLogout}>{t('Logout')}</Dropdown.Item>
                        <Dropdown.Item className='py-2' onClick={handleDashboard}>{t('Dashboard')}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              )}



              {/* <Nav.Link class='text-dark' onClick={toggleLanguage}>
                <FaGlobe /> {language === 'en' ? 'English' : 'Arabic'}
              </Nav.Link> */}

              <Dropdown>
                <Dropdown.Toggle variant={toggleDark ? 'dark' : 'light'} id="dropdown-language">
                  <FaGlobe size={25} className='mx-1 me-1' /> {language === 'en' ? 'English' : 'العربيه'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={toggleLanguage}>
                    {language === 'en' ? 'العربيه' : 'English'}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
};

export default Header;
