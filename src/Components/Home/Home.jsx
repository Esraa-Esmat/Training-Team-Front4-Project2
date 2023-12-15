import { Link } from "react-router-dom";
import img1 from "../../assest/images/group-diverse-people-having-business-meeting 2.png";
import img2 from "../../assest/images/teamwork-strategy-lead-business-success-generated-by-ai 1.png";
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

const Home = () => {
  return (
    <div style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>
      <div className="main mb-4">
        <div className="card bg-primary text-white">
          <img src={img1} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <div className="content">
              <h2 className="title1 text-white text-uppercase">Charter Accountants <span className="text-primary d-block"><span className='text-white'>&</span> Tax Experts</span></h2>
              <p className="p-content-main lh-sm my-5 pb-3">general professional partnership of Certified Public Accountants with strong
                academic credentials and professional experience. Our commitment is not
                just to provide high-level, impactful, and dependable professional services,
                but also to promote highly responsive client relationship.</p>
              <button className="btnmain btn1 bg-primary me-3">Request A Service</button>
              <button className="btnmain btn2 bg-transparent text-primary" style={{ width: "220px" }}>learn more</button>
            </div>
          </div>
        </div>
      </div>
      {/* ------- */}
      <div className="container-our-value w-100">
        <div className="rate-our-values m-auto d-flex justify-content-around mb-5 border-secondary-subtle rounded-4">
          <div className="rate-one text-lg-center">
            <Counter endValue={30} name={"Years of Experience"} />
            <Counter endValue={50} name={"Clients in Egypt"} />
            <Counter endValue={100} name={"Assignment in all Sectors"} />
          </div>
        </div>
        <div className="content-our-values" style={{ width: "85%", marginBottom: "9rem" }}>
          <div className="card mb-3 border-primary rounded-5" style={{ maxWidth: "50rem", height: "31em" }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body mt-3 p-5">
                  <h5 className="card-title fs-1 mb-4">OUR VALUES</h5>
                  <p className="card-text fs-4 lh-sm text-secondary">We are dedicated to empowering individuals,
                    businesses, and communities by providing
                    innovative and cutting-edge technology solutions
                    that unlock new possibilities and drive positive
                    change. Our mission is to make technology
                    accessible, reliable, and impactful, enabling our
                    customers to thrive in the digital era and shape a
                    better future for all.</p>
                  <a href="#" className="text-decoration-none fs-4">Learn More <i className="fa-solid fa-arrow-right"></i> </a>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <img src={img2} className="img-fluid-card rounded-5 border-end ms-5" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="our-services">
        <h1 className="fs-1 text-lg-center pt-5 text-our-services">OUR SERVICES</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <OurService title="Tax Services & Consultations" num='01' />
            <OurService title="Auditing & Assurance" num='02' />
            <OurService title="Bookkeeping" num='03' />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <OurService title="Investment & Incorporation" num='04' />
            <OurService title="Social Insurance" num='05' />
            <OurService title="Training Workshops" num='06' />
            <div className="m-auto w-25">
              <Link to="/contact" className="btn btn-primary text-decoration-none rounded-pill px-3 w-75 my-3" style={{ fontSize: "26px" }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sponserd">
        <div className="container">
          <div className="row">
            <div className="col-4 fs-2"><h2 style={{ fontSize: "50px" }}>OUR CLIENTS</h2></div>
            <div className="col"><img className="mt-3" src={fine} alt="fineLogo" /></div>
            <div className="col"><img className="mb-3" src={arab} alt="arab afrian" /></div>
            <div className="col"><img src={redBull} alt="Red Bull" /></div>
            <div className="col"><img src={fayum} alt="fayum gas" /></div>
            <div className="col"><img src={air} alt="airaraia" /></div>
          </div>
        </div>
      </section>
      <ExploreBlogs/>
      {/* <div className="container">
        <section className="our-latest-blogs mt-5">
          <h1 className="fs-1">Explore our Latest Blogs</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />

          </div>
          <div className="mt-3" style={{ float: "right" }}>
            <Link to="/allblog" className="text-decoration-none fs-5 text-dark">View All <i class="fas fa-chevron-right"></i></Link>
          </div>
        </section>
        <section className="question mb-5" style={{ marginTop: "11rem" }}>
          <div className="container-question">
            <div className="card bg-dark text-white rounded-5">
              <img src={lastImg} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <ul className="d-flex justify-content-around mt-3">
                  <li><h1 className="card-text-question  mt-lg-4">Have AQuestion?Let's Have A TalkTogether</h1></li>
                  <li><input className="btn btn-primary btn-question m-auto mt-lg-5 rounded-4 w-auto pe-5 ps-5 p-2 fs-5 " type="submit" value="Contact Us" /></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
}

export default Home;