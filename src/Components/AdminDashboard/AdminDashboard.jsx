import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminDashboardSideBar from './AdminDashboardGlobal/AdminDashboardSideBar'

const AdminDashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <AdminDashboardSideBar />
          </Col>
        </Row>
      </Container>
    </>)
}

export default AdminDashboard