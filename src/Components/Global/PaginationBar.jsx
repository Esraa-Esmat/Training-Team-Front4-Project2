import React from 'react';

const PaginationBar = () => {
    return ( 
        <ul className="pagination justify-content-center py-5">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
             <span aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
            </a>
          </li>
               <a className="page-link" href="#">1</a>
               <a className="page-link" href="#">2</a>
               <a className="page-link" href="#">3</a>
               <a className="page-link" href="#">4</a>
               <a className="page-link" href="#">...</a>
               <a className="page-link" href="#">10</a>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
            </a>
          </li>
        </ul>
     );
}
 
export default PaginationBar;