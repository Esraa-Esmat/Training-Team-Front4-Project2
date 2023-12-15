import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './Redux/Store';
import Header from './Components/Global/Header/Header';
import Footer from './Components/Global/Footer/Footer';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <App />
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

