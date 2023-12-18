import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { deleteService } from '../../../../Redux/Reducers/UserSlice';
import { Button } from 'react-bootstrap';
import { ServicesDataUserDashboard } from '../../../../DummyData/DummyData';


const TableBody = () => {
  const sortData = useSelector((state) => state.GlobalSlice.sortData);
  const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
  // const service = useSelector((state) => state.UserSlice.searchQuery);
  const { t, i18n } = useTranslation();
  const mutableUsersData = [...ServicesDataUserDashboard];
  console.log(mutableUsersData);

  const DataLang = mutableUsersData.map((servData) => {
    if (i18n.language === 'ar') {
      return ({
        id: servData.id,
        service: servData.servicesAr,
        SerialCode: servData.SerialCode,
        lastUpdate: servData.lastUpdate,
        date: servData.date,
        action: servData.actionAddAr
      })
    }
    return servData;
  })


  return (
    <>
      {DataLang.sort((a, b) => (sortData === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)))
          .filter((item) => item.service.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((service) => (
            <tr key={service.id}>
              <td></td>
              <td>{service.id}</td>
              <td></td>
              <td>{service.service}</td>
              <td>{service.SerialCode}</td>
              <td>{service.lastUpdate}</td>
              <td>{service.date}</td>
              <td><Link className='btn btn-primary' to='/chat'>{service.actionAdd}</Link ></td>
            </tr>
          ))
          
      }
      
    </>)



};

export default TableBody;

