import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminDashboardSideBar from '../AdminDashboardGlobal/AdminDashboardSideBar'
import PaginationBar from '../../Global/PaginationBar'
import TableServices from './TableServices/TableServices'
import '../AdminDashboardGlobal/AdminDashboard.css'
import { useSelector } from 'react-redux'
import DashboardHeader from '../../Global/Dashboard/DashboardHeader/DashboardHeader'

const ServicesAdminDashboard = () => {
    const activeLink = useSelector((state) => state.AdminSlice.activeLink);
    // const sortData = useSelector((state) => state.AdminSlice.sortData);
    const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <div className='px-4'>
                            <AdminDashboardSideBar />
                        </div>
                    </Col>


                    <Col sm={9}>
                        <div style={{ paddingRight: '50px' }}>
                            <div className={`my-5 rounded-5 border  ${toggleDark} ? 'bg-dark text-light' : 'bg-light text-dark'`}>
                                <DashboardHeader pageTitle={'All services'} />
                                <TableServices activeLink={activeLink}/>
                                <PaginationBar />

                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>

    )
}

export default ServicesAdminDashboard