import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { infoMsg } from '../../../Global/Toastify/Toastify';
import { deleteService } from '../../../../Redux/Reducers/AdminSlice';


const TableBody = () => {
  const sortData = useSelector((state) => state.GlobalSlice.sortData);
  const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
  const service = useSelector((state) => state.AdminSlice.service);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [filterData, setFilterData] = useState([]);

  const activeLink = useSelector((state) => state.AdminSlice.activeLink);

  useEffect(() => {
    let filteredData = [];

    switch (activeLink) {
      case 'unread':
        filteredData = service.filter((service) => service.action[0] === 'completed');
        break;
      case 'ongoing':
        filteredData = service.filter((service) => service.action[0] === 'Add milestone');
        break;
      default:
        filteredData = [...service];
        break;
    }

    const mappedData = filteredData.map((servData) => {
      if (i18n.language === 'ar') {
        return {
          'id': servData.id,
          'title': servData.titleAr,
          'service': servData.servicesAr,
          'user': servData.userAr,
          'SerialCode': servData.SerialCode,
          'date': servData.date,
          'action': servData.actionAr
        };
      }
      return servData;
    });

    setFilterData(mappedData);
  }, [activeLink, service, i18n.language]);



  const handleDelete = (index) => {
    dispatch(deleteService(index));
    infoMsg(`Service of id =${index} is Deleted`);
  }

  
  return filterData
    .sort((a, b) => (sortData === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)))
    .filter((item) => item.service.toLowerCase().includes(searchQuery.toLowerCase()))
    .map((service) => (
      <tr key={service.id}>
        <td></td>
        <td>{service.id}</td>
        <td></td>
        <td>{service.service}</td>
        <td>{service.SerialCode}</td>
        <td>{service.user}</td>
        <td>{service.date}</td>
        <td>

          <Link className={`py-1 text-decoration-none me-2 ${service.action[0] === 'completed' ? 'text-success fw-bold' : ''}`}>
            {service.action[0]}
          </Link>


          <Link className="py-1 text-decoration-none mx-3 text-danger"
            onClick={() => handleDelete(service.id)}
          >{service.action[1]}</Link>
        </td>
      </tr>
    ));

};

export default TableBody;

