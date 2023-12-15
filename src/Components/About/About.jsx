import React, { useEffect } from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import us from '../../assest/images/global-businessman-holding-glowing-sphere-futuristic-communication-concepts-generated-by-ai (1).png'
import mission from '../../assest/images/dart-board-with-word-darts-it.png'
import vision from '../../assest/images/man-stands-ledge-front-cityscape.png'
import prtn1 from '../../assest/images/fineLogo.png'
import prtn2 from '../../assest/images/arab afrian investment management.png'
import prtn3 from '../../assest/images/Red Bull.png'
import prtn4 from '../../assest/images/fayum gas.png'
import prtn5 from '../../assest/images/airaraia.png'


function About() {


  return (
    <>
      <div id="about" className="font-loader">
        <Container>
          <div className="about-content about-sec1">
            <Row className="text-center">
              <h2 className="fw-bold">Who We Are?</h2>
              <p>
                Our uncompromising adherence to our morals and ethical values
                allows us to provide our clients with remarkable services,
                contributing to having a positive impact on society, (Integrity,
                Professional conduct, Making a difference)
              </p>
            </Row>
            <Row>
              <Image src={us} />
            </Row>
          </div>
          <div className="about-content about-sec2">
            <div className="mission mb-5">
              <Row>
                <Col lg={8}>
                  <div className="about-disc">
                    <h3>OUR MISSION</h3>
                    <p>
                      To convert our comprehensive solutions, market knowledge,
                      and experience into value facilitating growth and
                      prosperity of clients’ businesses.
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Image src={mission} className="mision-img" />
                </Col>
              </Row>
            </div>
            <div className="vision">
              <Row>
                <Col lg={4}>
                  <Image src={vision} className="vision-img" />
                </Col>
                <Col lg={8}>
                  <div className="about-disc">
                    <h3>OUR VISION</h3>
                    <p>
                      to become first choice for our clients in respective
                      fields of auditing, taxation, accounting, managerial and
                      consultancies in the Arab world,
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="about-content about-sec3 text-center">
            <Row>
              <h2>Our Clients</h2>
              <Col>
                <Image src={prtn1} />
              </Col>
              <Col>
                <Image src={prtn2} />
              </Col>
              <Col className="d-none d-lg-block">
                <Image src={prtn3} />
              </Col>
              <Col className="d-none d-md-block">
                <Image src={prtn4} />
              </Col>
              <Col className=" d-none d-md-block">
                <Image src={prtn5} />
              </Col>
            </Row>
            <div className="about-content about-sec4">
              <Row className="g-0">
                <h2>Meet our Partners</h2>
                <Col lg={4}>
                  <div className="prtn-cont">
                    <div className="prtn  mx-auto"></div>
                    <h5>Mahmoud Abulmagd</h5>
                    <p>Managing Partner</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="prtn-cont">
                    <div id="main-prtn" className="prtn mx-auto"></div>
                    <h5>Mohamed El.Kady</h5>
                    <p>
                      Executive Manager |<br />
                      Partner
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="prtn-cont">
                    <div className="prtn mx-auto"></div>
                    <h5>Elsayed Essa</h5>
                    <p>Audit Partner</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;
