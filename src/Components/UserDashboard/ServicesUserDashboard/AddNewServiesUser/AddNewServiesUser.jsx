import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../../UserDashboardGlobal/UserDashboard.css'
import UserDashboardSideBar from '../../UserDashboardGlobal/UserDashboardSideBar'
import DashboardHeader from '../../../Global/Dashboard/DashboardHeader/DashboardHeader'
import PaginationBar from '../../../Global/PaginationBar'
import TableServices from './TableAddServices/TableServices'
import { Link } from 'react-router-dom'


const AddNewServiesUser = () => {
  const activeLink = useSelector((state) => state.UserSlice.activeLink);
  // const sortData = useSelector((state) => state.UserSlice.sortData);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <div className='px-4'>
              <UserDashboardSideBar />
            </div>
          </Col>


          <Col sm={9}>
            <div style={{ paddingRight: '50px' }}>
              <div className="bg-light my-5 rounded-5">
                <DashboardHeader pageTitle={'Request New Service'} />
                <TableServices activeLink={activeLink} />
              
                <PaginationBar />

              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </>

  )
}

export default AddNewServiesUser