import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import BlogCard from './BlogCard'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ExploreBlogs = () => {
    const { t, i18n } = useTranslation();

    const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    return (
        <>
            <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
                <div className={`section ${toggleDark} ? 'text-light' : ' text-dark`}>
                    <div className='px-2'>
                        <h2 className="text-dark d-start mt-5" style={{ fontFamily: 'Mulish' }}>{t('Explore our Latest Blogs')}</h2>
                    </div>
                </div>


                <Row className="m-md-auto">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard display='item4'/>
                </Row>

                <Row>

                    <Col lg={12} md={12} className={`col-9 ${i18n.language === 'en' ? 'text-end' : 'text-start'} mt-2 px-3`}>
                        <Link to="/blog" className='text-dark mx-2 text-decoration-none'>
                            {t('View All')}
                        </Link>
                        {i18n.language === 'en' ? <IoIosArrowForward size={24} /> : <IoIosArrowBack size={24} />}
                    </Col>

                </Row>

            </Container>
        </>)
}

export default ExploreBlogs