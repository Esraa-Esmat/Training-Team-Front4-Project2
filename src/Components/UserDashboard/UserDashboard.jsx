import React from 'react'
import SearchBar from '../Global/SearchBar'
import { Col, Row } from 'react-bootstrap'
import { CompanyData } from '../DummyData/DummyData'
import PaginationBar from '../Global/PaginationBar'
import UserDashboardSideBar from './UserDashboardGlobal/UserDashboardSideBar'

const UserDashboard = () => {
  return (
    <Row>
      <Col>
        <UserDashboardSideBar />
      </Col>
      
    </Row>

  )
}

export default UserDashboard