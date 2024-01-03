import { Link } from "react-router-dom";
import img1 from "../../assest/images/group-diverse-people-having-business-meeting 2.png";
import fine from "../../assest/images/fineLogo.png";
import fayum from "../../assest/images/fayum gas.png";
import redBull from "../../assest/images/Red Bull.png";
import air from "../../assest/images/airaraia.png";
import arab from "../../assest/images/arab afrian investment management.png"
import lastImg from "../../assest/images/successfulHands.png"
import BlogCard from "./BlogCard";
import Counter from "./Counter";
import './Home.css'

import OurService from "./OurService";
import ExploreBlogs from "../Blogs/ExploreBlogs";
import { Button, Col, Container, Row } from "react-bootstrap";
import MainSection from "./MainSection";
import OurValues from "./OurValues";

  

const Home = () => {

  return (
    <div style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>
      <MainSection />
      {/* ------- */}
      <div className="container-our-value my-5 p-3 mb-3">
        <div className="rate-our-values container border-secondary-subtle rounded-4">
          <Row className="rate-one text-lg-center">
            <Counter endValue={30} name={"Years of Experience"} />
            <Counter endValue={50} name={"Clients in Egypt"} />
            <Counter endValue={100} name={"Assignment in all Sectors"} />
          </Row>
        </div>
        <OurValues />
      </div>


      <section className="our-services py-3 pt-5">
        <h1 className="fs-1 fw-bold text-lg-center py-5 text-our-services">OUR SERVICES</h1>
        <Container>
          <Row className="g-4 py-3">
            <OurService title="Tax Services & Consultations" num='01' />
            <OurService title="Auditing & Assurance" num='02' />
            <OurService title="Book keeping" num='03' />
            <OurService title="Investment & Incorporation" num='04' />
            <OurService title="Social Insurance" num='05' />
            <OurService title="Training Workshops" num='06' />
          </Row>
          <div className="text-center py-3">
            <Link to="/contact" className="btn btn-primary text-decoration-none rounded-pill px-5 my-3" style={{ fontSize: "26px" }}>Contact Us</Link>
          </div>
        </Container>
      </section>
    <section className="sponserd">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={4}>
              <h2 className="fs-2" style={{ fontSize: "50px" }}>OUR CLIENTS</h2>
            </Col>
            <Col xs={6} sm={2} md={1}>
              <img className="img-fluid mt-3 mb-3" src={fine} alt="fineLogo" />
            </Col>
            <Col xs={6} sm={2} md={1}>
              <img className="img-fluid mb-3" src={arab} alt="arab afrian" />
            </Col>
            <Col xs={6} sm={2} md={1}>
              <img className="img-fluid" src={redBull} alt="Red Bull" />
            </Col>
            <Col xs={6} sm={2} md={1}>
              <img className="img-fluid" src={fayum} alt="fayum gas" />
            </Col>
            <Col xs={6} sm={2} md={1}>
              <img className="img-fluid" src={air} alt="airaraia" />
            </Col>
          </Row>
        </Container>
      </section>

      <ExploreBlogs />
    </div >
  );
}

export default Home;