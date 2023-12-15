import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import './CTA.css'
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t, i18n } = useTranslation();

    return (
        <div className='container pb-5 mt-5'>
            <div className="CTA container">
                <Container>
                    <Row className="align-items-center text-light p-5">
                        <Col className='py-2 px-4'>
                            <h2>{t('Have A Question?')}</h2>
                            <h2>{t("Let's Have A Talk Together")}</h2>
                        </Col>
                        <Col className="d-flex justify-content-end px-4">
                            <Button variant="primary">{t('Contact Us')}</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CTA