import React from 'react'
import img2 from "../../assest/images/teamwork-strategy-lead-business-success-generated-by-ai 1.png";
import mission from '../../assest/images/dart-board-with-word-darts-it.png'
import { Col, Row ,Image} from 'react-bootstrap';

const OurValues = () => {
  return (
//     <div className="mission my-5">
//     <Row>
//       <Col lg={8}>
//         <div className="about-disc">
//           <h3>OUR MISSION</h3>
//           <p>
//             To convert our comprehensive solutions, market knowledge,
//             and experience into value facilitating growth and
//             prosperity of clients’ businesses.
//           </p>
//         </div>
//       </Col>
//       <Col lg={4}>
//         <Image src={mission} className="mision-img" />
//       </Col>
//     </Row>
//   </div>
    <div className="content-our-values my-5" >
          <div className=" mb-3 container "style={{position:'relative'}}>
            <div className="w-100">
            <div className="w-75 rounded-5 our-values-desc">
            <div className="px-5">
                <div className="mt-3 py-1">
                <div className="mt-3  py-4 w-75">
                  <h5 className=" fs-1 mb-4">OUR VALUES</h5>
                  <p className=" fs-4 lh-sm text-secondary">We are dedicated to empowering individuals,
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
              </div>
            </div>
              <div className="mt-4 mx-3" style={{width:'30%', position:'absolute',right:'110px' , top:'30px'}}>
                <img src={img2} className="img-fluid-card rounded-5 border-end ms-5" alt="..." />
              </div>
            </div>
          </div>
        </div>  
    )
}

export default OurValues