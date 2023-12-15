import React, { useEffect } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { ContactsFormData } from '../DummyData/DummyData'
import { useTranslation } from 'react-i18next';

const ContactsForm = () => {
    const { t, i18n } = useTranslation();

    return (
        <Container className='w-75 m-auto py-4'>
            <Row className="mt-4 p-4 rounded-5" style={{ border: "2px solid rgb(236, 236, 236)" }}>
                {ContactsFormData.map((itm) => (
                    <React.Fragment key={itm.id}>
                        {itm.type !== 'textarea' && (
                            <Col sm={12} md={6} mt={4} className='py-2'>
                                <Form.Group>
                                    <Form.Label>{i18n.language === 'en' ? itm.title : itm.titleAr}</Form.Label>
                                    {itm.required && <span className="star"></span>}
                                    <Form.Control
                                        type={itm.type}
                                        className='rounded-4'
                                        style={{ borderWidth: "2px", padding: "15px" }}
                                        placeholder={i18n.language === 'en' ? itm.placeholder : itm.placeholderAr}
                                        {...(itm.required && { required: true })}
                                    />
                                </Form.Group>
                            </Col>
                        )}
                        {itm.type === 'textarea' && (
                            <Col md={12} sm={12} mt={4} className='p-3'>
                                <Form.Group>
                                    <Form.Label>{i18n.language === 'en' ? itm.title : itm.titleAr}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={7}
                                        style={{ borderWidth: "2px", borderRadius: "18px", padding: "15px" }}
                                        placeholder={i18n.language === 'en' ? itm.placeholder : itm.placeholderAr}
                                    />
                                </Form.Group>
                            </Col>
                        )}
                    </React.Fragment>
                ))}
                <Col md={12} sm={12} mt={4} className="text-center py-4">
                    <Button variant="primary" style={{ width: "250px", borderRadius: "35px", fontWeight: "bold" }}>{t('Send now')}</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default ContactsForm