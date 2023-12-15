import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

import { ContactsInfoData } from '../DummyData/DummyData'
import baseMap from '../../assest/images/Basemap image.png'
import { useTranslation } from 'react-i18next'

const ContactInfo = () => {
  const { t, i18n } = useTranslation();

  return (
    <Row className="my-4 text-center m-auto" style={{ width: '95%' }}>
      <Col xs={12} className="map-img" style={{ marginTop: "75px" }}>
        <Image src={baseMap} alt="photo" fluid />
      </Col>
      <div className="w-100 text-center">
        <Row className="justify-content-around home">
          {ContactsInfoData.map((itm) => (
            <Col lg={3} md={3} xs={9} className="d-flex flex-column align-items-center justify-content-center pt-3 blogCard bg-white rounded-5 my-3">
              {itm.icon}
              <h3 className='py-2'>{i18n.language === 'en' ? itm.title : itm.titleAr}</h3>
              <p>{i18n.language === 'en' ? itm.description : itm.descriptionAr}</p>
            </Col>
          ))}

        </Row>
      </div>
    </Row>
  )
}

export default ContactInfo