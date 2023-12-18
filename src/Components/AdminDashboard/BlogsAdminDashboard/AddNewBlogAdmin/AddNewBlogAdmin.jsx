import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminDashboardSideBar from '../../AdminDashboardGlobal/AdminDashboardSideBar'
import AddBlog from './AddBlog'
import DashboardHeader from '../../../Global/Dashboard/DashboardHeader/DashboardHeader'

const AddNewBlogAdmin = () => {
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
          <div className="bg-light my-5 rounded-5">
            <DashboardHeader pageTitle={'Add New Blog'} display={'display'} />
            <AddBlog/>
          </div>
        </div>
      </Col>
    </Row>

  </Container>  )
}

export default AddNewBlogAdmin