import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { infoMsg } from '../../../../Global/Toastify/Toastify';
import { deletePaper, setShow } from '../../../../../Redux/Reducers/UserSlice';
import { Button, Image, Modal } from 'react-bootstrap';
import defaultImg from '../../../../../assest/images/default-placeholder.png'


const TableCompanyBody = () => {
  const sortData = useSelector((state) => state.GlobalSlice.sortData);
  const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
  const PapersData = useSelector((state) => state.UserSlice.papers);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [show, setShowState] = useState(false);

  let mutableUsersData = [...PapersData];

  const DataLang = mutableUsersData.map((servData) => {
    if (i18n.language === 'ar') {
      return {
        id: servData.id,
        document: servData.documentAr,
        status: servData.statusAr,
        uploadDate: servData.uploadDate,
        date: servData.date,
        action: servData.actionAr,
      };
    }
    return servData;
  });

  const handleDelete = (id) => {
    dispatch(deletePaper(id));
    infoMsg(`Paper of id =${id} is Deleted`);
  };

  const toggleShow = () => {
    setShowState(true); // Update the state to show the modal
  };

  const handleClose = () => {
    setShowState(false); // Update the state to hide the modal
  };

  return (
    <>
      {
        DataLang
          .sort((a, b) => (sortData === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)))
          .filter((item) => item.document.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((document) => (
            <tr key={document.id}>
              <td></td>
              <td>{document.id}</td>
              <td></td>
              <td>{document.document}</td>
              <td>{document.status}</td>
              <td>{document.uploadDate}</td>
              <td>{document.date}</td>
              <td className="d-flex">
                <Link className="py-1 text-decoration-none text-primary me-2" onClick={toggleShow}>{document.action[0]}</Link>
                <Link className="py-1 text-decoration-none text-danger" onClick={() => handleDelete(document.id)}>
                  {document.action[1]}
                </Link>
              </td>
            </tr>
          ))}
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Paper</Modal.Title>
          </Modal.Header>
          <Modal.Body><Image src={defaultImg} alt='paper'/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default TableCompanyBody;
