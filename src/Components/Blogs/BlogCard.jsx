import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import BlogsFeatured from '../../assest/images/Blogs Featured Image.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const BlogCard = ({ display }) => {
  const { t, i18n } = useTranslation();
  const userRole = useSelector((state) => state.UserSlice.userRole);
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  return (
    <Col lg={4} md={6} sm={12} xs={10} className={`m-auto m-md-auto ${display ? display : ""}`}>
      <Card className={`rounded-4 my-4${ toggleDark} ? 'bg-dark text-light' : 'bg-light text-dark`} style={{ border: "1px solid rgb(55, 182, 255)" }}>
        <Image fluid src={BlogsFeatured} alt="photo" className="card-img-top" />
        <Card.Body>
          <Card.Title className="mb-3 fw-bold">{t('Lorem ipsum dolor sit amet')}</Card.Title>
          <Card.Text className="lh-1 small">
            {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu')}
          </Card.Text>

          <div className='linksCardBlog mt-4'>
            <Card.Link href="/singleblog" className={`text-dark  mb-2 pb-4 ${i18n.language === 'en' ? '' : ''}`} >
              {t('Read more')}
            </Card.Link>

            {userRole == 'Admin' && (<div>
              <Card.Link href="/singleblog" className={`text-dark ms-3  mb-2 pb-4 ${i18n.language === 'en' ? '' : 'px-3'}`} >
                Edit
              </Card.Link>
              <Card.Link href="/singleblog" className={`text-danger ms-3  mb-2 pb-4 ${i18n.language === 'en' ? '' : 'px-3'}`} >
                Delete
              </Card.Link>
            </div>)}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
