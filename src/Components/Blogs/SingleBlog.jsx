import React from 'react'
import TextBlock from './TextBlock'
import BlogCard from './BlogCard'
// import TextBlock from '../../components/BlogSingle/TextBlock'
// import BlogCard from '../../components/shared/BlogCard'
import BlogsFeatured from '../../assest/images/Blogs Featured Image.png'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingeBlog = () => {
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  return (
    <>
      <div className={`container  overflow-hidden container-md px-md-5 m-auto ${toggleDark} ? 'bg-dark text-light' : 'bg-light text-dark`} style={{ maxWidth: "992px" }}>
        <h1 class="mb-5 mt-5">Lorem ipsum dolor sit amet</h1>
        <TextBlock />
        <TextBlock />
        <img src={BlogsFeatured} alt="" style={{ width: "113%", translate: "-6%", marginBottom: "-50px" }} />
        <TextBlock />
        <TextBlock />
      </div>
      <div class="container" style={{ margin: "auto", maxWidth: "1200px" }}>
        <h2 class="mt-5">Related Blogs </h2>
        <Row className="m-md-auto">
          <BlogCard />
          <BlogCard />
          <BlogCard display='item4'/>
        </Row>
        <div>
          <a class="mt-4 float-end" style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}>View All<i
            class="fas fa-chevron-right ms-2 me-3" style={{ color: "rgba(0, 0, 0, 0.723)" }}></i></a>
        </div>
      </div>
    </>
  )
}

export default SingeBlog