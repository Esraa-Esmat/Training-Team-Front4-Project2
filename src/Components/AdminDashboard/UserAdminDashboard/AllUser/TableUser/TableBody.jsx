import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UsersData } from '../../../../DummyData/DummyData';
import { deleteUser } from '../../../../../Redux/Reducers/AdminSlice';
import { infoMsg } from '../../../../Global/Toastify/Toastify';
import { useTranslation } from 'react-i18next';

const TableBody = () => {
  const sortData = useSelector((state) => state.GlobalSlice.sortData);
  const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
  const UsersData = useSelector((state) => state.AdminSlice.users);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const mutableUsersData = [...UsersData];

  const DataLang = mutableUsersData.map((data) => {
    if (i18n.language === 'ar') {
      return ({
        'id': data.id,
        'title': data.titleAr,
        'username': data.usernameAr,
        'email': data.email,
        'company': data.companyAr,
        'date': data.date,
        'action': data.actionAr
      })
    }
    return data;
  })

  const handleDelete = (index) => {
    dispatch(deleteUser(index))
    infoMsg(`User of id =${index}  is Deleted`)
  }

    DataLang.sort((a, b) => {
      if (sortData === 'asc') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });


  return DataLang.filter((item) =>
    item.username.toLowerCase().includes(searchQuery.toLowerCase())
  ).map(user => (
    <tr key={user.id} >
      <td> </td>
      <td>{user.id}</td>
      <td> </td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.company}</td>
      <td>{user.date}</td>
      <td className="d-flex">
        <Link className="py-1 text-decoration-none text-primary me-2">{user.action[0]}</Link>
        <Link className="py-1 text-decoration-none text-danger"
          onClick={() => handleDelete(user.id)}
        >{user.action[1]}</Link>
      </td>
    </tr>
  ));
}

export default TableBody