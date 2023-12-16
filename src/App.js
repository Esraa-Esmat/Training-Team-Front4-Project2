import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';
// import HomePage from './Components/HomePage/HomePage';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import { useSelector } from 'react-redux';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import UserDashboard from './Components/UserDashboard/UserDashboard';
import { useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import TogleTheme from './Components/Global/TogleTheme/TogleTheme';
import { settoggleDark } from './Redux/Reducers/GlobalSlice';
import AdminDashboardSideBar from './Components/AdminDashboard/AdminDashboardGlobal/AdminDashboardSideBar';
import Chat from './Components/Chat/Chat';
import SingleBlog from './Components/Blogs/SingleBlog';
import Home from './Components/Home/Home';
import UserDashboardPaper from './Components/UserDashboard/UserDashboardPaper';
import UserDashboardServies from './Components/UserDashboard/UserDashboardServies';
// import { ThemeProvider } from 'react-bootstrap';
// eos



function App() {

  const login = useSelector((state) => state.UserSlice.login);
  const userRole = useSelector((state) => state.UserSlice.userRole);
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);


  const myTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
      primary: { main: '#018dff' },
      text: { disabled: '#018dff' }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "linear-gradient( rgba(255, 255, 255, 0.16), rgb(1 141 255 / 43%), rgba(255, 255, 255, 0.16))"
          },
        },
      },
    },
  });


  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <TogleTheme toggleDark={toggleDark} settoggleDark={settoggleDark} />
      
      {/* ------------------------- Gobal -----------------------------------------*/}
      <ScrollToTopButton />
      <ToastContainer />
      {/* ------------------------- Gobal -----------------------------------------*/}
      <Routes>
        {/* ------------------------- Common routes -----------------------------------------*/}

        {/* <Route path="/*" element={<HomePage />} /> */}
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact us" element={<Contacts />} />
        <Route path="/singleblog" element={<SingleBlog/>} />
        <Route path="/chat" element={<Chat/>} />

        {/* ------------------------- /Common routes -----------------------------------------*/}


        {/* ----------------------------------- Auth -----------------------------------------*/}

        {!login && <Route path="/login" element={<Login />} />}
        {!login && userRole == null && <Route path="/register" element={<Register />} />}
        {/* ----------------------------------- Auth -----------------------------------------*/}


        {/* ------------------------- Admin Dashboard -----------------------------------------*/}
        {login && userRole === 'admin' && <Route path="/admindashboard" element={<AdminDashboard />} />}


        {/* ------------------------ /Admin Dashboard -----------------------------------------*/}
        <Route path="/admindashboard" elemet={<AdminDashboardSideBar />} />

        {/* ------------------------- User Dashboard -----------------------------------------*/}
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/userdashboardpaper" element={<UserDashboardPaper />} />
        <Route path="/userdashboardservies" element={<UserDashboardServies />} />

        {/* ------------------------ /User Dashboard -----------------------------------------*/}

      </Routes>
    </ThemeProvider>
  );
}

export default App;
