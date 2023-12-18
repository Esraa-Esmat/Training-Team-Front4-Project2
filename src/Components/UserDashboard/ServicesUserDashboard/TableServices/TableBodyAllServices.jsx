import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ServicesDataUserDashboard } from '../../../DummyData/DummyData';


const TableBodyAllServices = () => {
  const sortData = useSelector((state) => state.GlobalSlice.sortData);
  const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
  const activeLink = useSelector((state) => state.UserSlice.activeLink);
  const service = useSelector((state) => state.UserSlice.service);

  const { t, i18n } = useTranslation();
  const [filterData, setFilterData] = useState(service);

  
  // console.log('Service:', service);
  // console.log('filterData:', filterData);
  console.log('Active Link:', activeLink);
  console.log('Language:', i18n.language);

  useEffect(() => {
    let updatedData = [...service];

    if (activeLink === 'ongoing') {
      updatedData = updatedData.filter((item) => item.action === 'details');
    }

    updatedData = updatedData.map((servData) => {
      if (i18n.language === 'ar') {
        return {
          id: servData.id,
          service: servData.servicesAr,
          SerialCode: servData.SerialCode,
          lastUpdate: servData.lastUpdate,
          date: servData.date,
          action: servData.actionAr
        };
      }
      return servData;
    });

    setFilterData(updatedData);
  }, [activeLink, i18n.language]);

  const sortedData = [...filterData].sort((a, b) => (
    sortData === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
  ));

  return sortedData
    .sort((a, b) => (sortData === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)))
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
        <td className={service.action === 'completed' ? 'text-success fw-bold' : ''}>{service.action}</td>
        {/* <td>

          <Link className={`py-1 text-decoration-none me-2 ${service.action[0] === 'completed' ? 'text-success fw-bold' : ''}`}>
            {service.action[0]}
          </Link>


          <Link className="py-1 text-decoration-none mx-3 text-danger"
            // onClick={() => handleDelete(service.id)}
          >{service.action[1]}</Link>
        </td> */}
      </tr>
    ));

};

export default TableBodyAllServices;

