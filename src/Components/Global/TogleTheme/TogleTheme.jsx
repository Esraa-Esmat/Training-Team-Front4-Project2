import React from 'react'
import './TogleTheme.css'
import { RiSunFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { settoggleDark } from '../../../Redux/Reducers/GlobalSlice';
import { useTranslation } from 'react-i18next';



export default function TogleTheme() {

   const dispatch = useDispatch();
   const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);
   const { t, i18n } = useTranslation();

   const handleToggleClick = () => {
      dispatch(settoggleDark(!toggleDark));
   };
   return (
      <div className={`themeDiv position-absolute mt-3 me-3 ${i18n.language === 'en' ? 'top-0 end-0' : 'top-0 start-0 mx-5'}`}>

         <Button
            className='themeIcon'
            variant="light"
            onClick={handleToggleClick}
            title='Dark/Light mode'
         >
            {toggleDark ? <FaMoon className='togleIco text-primary' /> : <RiSunFill size={22} className='togleIco text-primary' />}
         </Button>
      </div>
   )
}
