import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminDashboardSideBar from '../../AdminDashboardGlobal/AdminDashboardSideBar'
import PaginationBar from '../../../Global/PaginationBar'
import AddUser from './AddUser'
import DashboardHeader from '../../../Global/Dashboard/DashboardHeader/DashboardHeader'
import { useSelector } from 'react-redux'

const AddNewUserAdmin = () => {
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <div className='px-4'>
            <AdminDashboardSideBar />
          </div>
        </Col>


        <Col sm={9}>
          <div style={{ paddingRight: '50px' }}>
            <div className={`my-5 rounded-5 border ${toggleDark ? 'bg-dark text-light border' : ''}`}>
              <DashboardHeader pageTitle={'Add New User'} display={'display'} />
              <AddUser />
            </div>
          </div>
        </Col>
      </Row>

    </Container>)
}

export default AddNewUserAdmin