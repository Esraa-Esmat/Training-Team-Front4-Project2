import React from 'react';

const OurService = ({title , num}) => {
    return ( 
    <div className="col box-one bg-white m-lg-3 rounded-4 border-primary py-3" style={{fontFamily: 'ZCOOL XiaoWei, sans-serif'}}>
        <div className="box-one-content pt-2 ps-3">
          <h1 className="position-absolute fs-1 text-primary opacity-25">{num}</h1>
          <h2 className="text-black fw-bold pb-2 " style={{height:"100px",marginRight:"4rem"}}>{title}</h2>
          <p>provides its tax services in this area on 
            the basis of the specialization principle. 
            Accordingly, each partner and his group 
            provide ...</p>
            <a href="#" className="text-decoration-none">Learn More</a>
    </div>
      </div>
     );
}
 
export default OurService;