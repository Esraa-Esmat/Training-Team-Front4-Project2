import React from "react";
import "./services.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { serviceData as service } from "./ServicesData";

function Services() {
 

  return (
    <>
      <div id="services" className="font-loader">
        <Container>
          <div className="service-content service-intro text-center" >
            <Row>
              <h2>Our Services</h2>
              <p>
                We provide you with a wide range of service in the fields of
                audit, assurance, accountin taxation, investment, and
                incorporation of new companies with a competitive fee.
              </p>
            </Row>
          </div>
          <div className="service-content service-sec">
            {service.map((data) => {
              return (
                <div className="mission" key={data.id}>
                  <Row>
                    <Col lg={7}>
                      <div className="service-disc">
                        <h3>{data.title}</h3>
                        <p>{data.discription}</p>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <Image src={data.img} className="service-img" />
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Services;
