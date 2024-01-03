import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminDashboardSideBar from '../../../AdminDashboard/AdminDashboardGlobal/AdminDashboardSideBar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import EditProfile from './EditProfile';
import UserDashboardSideBar from '../../../UserDashboard/UserDashboardGlobal/UserDashboardSideBar';
import { useSelector } from 'react-redux';




const SettingAdminDashboard = ({Role}) => {
  const userRole = useSelector((state) => state.UserSlice.userRole);
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    return (
        <>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <div className='px-4'>
                {/* <AdminDashboardSideBar/> */}
                {userRole == 'admin'? <AdminDashboardSideBar />:<UserDashboardSideBar />}
              
              </div>
            </Col>
  
  
            <Col sm={9}>
              <div style={{ paddingRight: '50px' }}>
                <div className={`my-5 rounded-5  ${toggleDark ? 'bg-dark text-light border' : 'bg-light text-dark'}`}>
                  <DashboardHeader pageTitle={'Edit Profile'} display={'display'} />
                  <EditProfile/>
                </div>
              </div>
            </Col>
          </Row>
  
        </Container>
      </>
        )
}

export default SettingAdminDashboard