import React from 'react';
import { Col } from 'react-bootstrap';

const OurService = ({ title, num }) => {
  return (
    <Col style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>
      <div className='box-one bg-white rounded-4 border-primary py-4 px-3'>
        <div className="box-one-content pt-2 ps-3">
          <h1 className="position-absolute fs-1 text-primary opacity-25">{num}</h1>
          <h2 className="text-black fw-bold" style={{ height: "100px", marginRight: "4rem" }}>{title}</h2>
          <p>provides its tax services in this area on
            the basis of the specialization principle.
            Accordingly, each partner and his group
            provide ...</p>
          <a href="#" className="text-decoration-none">Learn More</a>
        </div>
      </div>
    </Col>
  );
}

export default OurService;