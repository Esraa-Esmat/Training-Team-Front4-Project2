import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminDashboardSideBar from '../../AdminDashboardGlobal/AdminDashboardSideBar'
import PaginationBar from '../../../Global/PaginationBar'
import TableUser from './TableUser/TableUser'
import DashboardHeader from '../../../Global/Dashboard/DashboardHeader/DashboardHeader'
import { useSelector } from 'react-redux'


const UserAdminDashboard = () => {
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  return (
    <>
      <Container fluid className={` ${toggleDark ? 'bg-dark text-light' : ''}`}>
        <Row>
          <Col sm={3}>
            <div className='px-4'>
              <AdminDashboardSideBar />
            </div>
          </Col>


          <Col sm={9}>
            <div style={{ paddingRight: '50px' }}>
              <div className={`${toggleDark ? 'bg-dark text-light border' : 'bg-light text-dark'} my-5 rounded-5`}>
                <DashboardHeader pageTitle={'All Users'} />
                <TableUser />
                <PaginationBar />

              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  )
}


export default UserAdminDashboard