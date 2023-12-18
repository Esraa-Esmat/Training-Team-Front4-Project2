import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from '../../../../Redux/Reducers/UserSlice';

const ViewPapers = () => {
    const show = useSelector((state) => state.UserSlice.show);
    const dispatch = useDispatch();
  
    const handleClose = () => {
      dispatch(setShow(false)); // Dispatch setShow with false to close the modal
    };
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>)
}

export default ViewPapers
