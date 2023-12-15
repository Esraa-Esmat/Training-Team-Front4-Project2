import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import BlogsFeatured from '../../assest/images/Blogs Featured Image.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogCard = ({ display }) => {
  const { t, i18n } = useTranslation();

  return (
    <Col lg={4} md={6} sm={12} xs={10} className={`m-auto m-md-auto ${display ? display : ""}`}>
      <Card className='rounded-4 my-4' style={{ border: "1px solid rgb(55, 182, 255)" }}>
        <Image fluid src={BlogsFeatured} alt="photo" className="card-img-top" />
        <Card.Body>
          <Card.Title className="mb-3 fw-bold">{t('Lorem ipsum dolor sit amet')}</Card.Title>
          <Card.Text className="lh-1 small">
            {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu')}
          </Card.Text>
        </Card.Body>
        <Card.Link href="/singleblog" className={`text-dark ms-3 mb-2 pb-4 ${i18n.language === 'en' ? '' : 'px-3'}`} >
          {t('Read more')}
        </Card.Link>
      </Card>
    </Col>
  );
};

export default BlogCard;
