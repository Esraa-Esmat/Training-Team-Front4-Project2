import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { AdminSidebarData } from '../../DummyData/DummyData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdminDashboardSideBar = () => {
    const { t, i18n } = useTranslation();


    return (
        <Container >
          

            <div className="bg-primary rounded-bottom text-capitalize pt-5 d-none d-xl-block">
            <div className='text-light fw-bold text-center' style={{marginBottom : '300px'}}>
                <h3>DashBoard</h3>
            </div>
                {AdminSidebarData.map((section) => (
                    <div key={section.id}>
                        <h5
                            className="d-block text-light bg-black bg-opacity-25 rounded fw-bold py-3 px-4 text-decoration-none"
                        // to='/adminpanel'
                        >
                            {/* {section.title} */}
                            {i18n.language === 'en' ? section.title : section.titleAr}

                        </h5>
                        <ul className="list-unstyled px-4 link-info line_height-2 mt-3 mb-5">
                            {/*  						{settitleSideBar == section.title && { */}

                            {i18n.language === 'en'
                                ? section.data.map((sub, j) => (
                                    <li key={j}>
                                        {/* Render English content */}
                                        <h6
                                            className="text-light active-scale clickable"
                                            style={{ transformOrigin: 'left' }}
                                        // onClick={() => handleSelectContent(sub, section.title)}									
                                        >
                                            {sub}
                                        </h6>
                                    </li>
                                ))
                                : section.dataAr.map((sub, j) => (
                                    <li key={j}>
                                        {/* Render Arabic content */}
                                        <h6
                                            className="text-light active-scale clickable"
                                            style={{ transformOrigin: 'left' }}
                                        // onClick={() => handleSelectContent(sub, section.title)}									
                                        >
                                            {sub}
                                        </h6>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                ))}
                <Button variant='dark' className='w-100 rounded-0 rounded-bottom'>{t('Logout')}</Button>

            </div>
        </Container>
    );
}

export default AdminDashboardSideBar

