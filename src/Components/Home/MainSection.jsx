import React from 'react'
import { Button } from 'react-bootstrap'

const MainSection = () => {
  return (
    <div className="main" >
    <div className="py-5">
      <div className="content container d-flex flex-column justify-content-center align-items-start ">
        <h2 className="title-content-main fw-bold text-white text-uppercase" >Charter Accountants <span className="text-primary d-block"><span className='text-white'>&</span> Tax Experts</span></h2>
        <p className="p-content-main text-white my-2 py-3">general professional partnership of Certified Public Accountants with strong
          academic credentials and professional experience. Our commitment is not
          just to provide high-level, impactful, and dependable professional services,
          but also to promote highly responsive client relationship.</p>
        <div className="d-flex py-1">
          <Button className="btn-content-main rounded-5 px-4 py-2 my-3 border text-capitalize bg-primary me-3" >Request A Service</Button>
          <Button className="btn-content-main rounded-5 px-4 py-2 my-3 border text-capitalize bg-transparent text-primary mx-4" >Learn More</Button>
        </div>
      </div>
    </div>
  </div>  )
}

export default MainSection