import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserDashboardSideBar from '../../UserDashboardGlobal/UserDashboardSideBar'
import DashboardHeader from '../../../Global/Dashboard/DashboardHeader/DashboardHeader'
import TablePersonalPaper from './TablePersonalPaper/TablePersonalPaper'
import PaginationBar from '../../../Global/PaginationBar'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'



const PersonalPapersUser = () => {
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);
  const { t, i18n } = useTranslation();

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
              <div className={`my-5 rounded-5  ${toggleDark ? 'bg-dark text-light border' : 'bg-light text-dark'}`}>

                <DashboardHeader pageTitle={t('personal Papers')} />

                <TablePersonalPaper />
                <PaginationBar />

              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  )
}


export default PersonalPapersUser