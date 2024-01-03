import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../../../../Redux/Reducers/AdminSlice';
import { infoMsg } from '../../../Global/Toastify/Toastify';

const BlogsContent = () => {
    const cards = new Array(6).fill(null);
    const { t, i18n } = useTranslation();
    const sortData = useSelector((state) => state.GlobalSlice.sortData);
    const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
    const blogs = useSelector((state) => state.AdminSlice.blogs);
    const dispatch = useDispatch()
    const sortedBlogData = [...blogs];
    const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    const DataLang = sortedBlogData.map((data) => {
        if (i18n.language === 'ar') {
          return ({
            'id': data.id,
            'title': data.titleAr,
            'blog':data.blogAr,
            'img':data.img
          })
        }
        return data;
      })

    DataLang.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (sortData === 'asc') {
            return titleA.localeCompare(titleB);
        } else {
            return titleB.localeCompare(titleA);
        }
    });

    const handleDelete = (itemId) => {
        dispatch(deleteBlog(itemId));
        infoMsg(`Blog of ${itemId} is Deleted`)
    }
    return (
        <>
            <Row className={`mx-1 ${toggleDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                {/* {cards.map((_, index) => (
                        <BlogCard />
                ))} */}

                {DataLang.filter((item) =>
                    item.blog.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((itm) => (
                    <Col lg={4} md={6} sm={12} xs={10} className={`m-auto m-md-auto`} key={itm.id}>
                        <Card className={`rounded-4 my-4 ${toggleDark ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ border: "1px solid rgb(55, 182, 255)" }}>
                            <Image fluid src={itm.img} alt="photo" className="card-img-top" />
                            <Card.Body>
                                <Card.Title className="mb-3 fw-bold">{itm.title}</Card.Title>
                                <Card.Text className="lh-1 small">
                                    {itm.blog}
                                </Card.Text>

                                <div className='linksCardBlog mt-4'>
                                    <Card.Link href="/singleblog" className={`text-dark btn mx-0 px-0 text-decoration-underline ${toggleDark ? 'bg-dark text-light' : 'bg-light text-dark'}`} >
                                        {t('Read more')}  
                                    </Card.Link>

                                    <div>
                                        <Card.Link href="/singleblog" className={`text-dark btn ${i18n.language === 'en' ? '' : 'px-3'}`} >
                                            {t('Edit')}
                                        </Card.Link>
                                        <Card.Link
                                            onClick={() => handleDelete(itm.id)}
                                            className={`text-danger btn ms-3  ${i18n.language === 'en' ? '' : 'px-3'}`} >
                                            {t('Delete')}
                                        </Card.Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>))}
            </Row>
        </>
    );
}

export default BlogsContent