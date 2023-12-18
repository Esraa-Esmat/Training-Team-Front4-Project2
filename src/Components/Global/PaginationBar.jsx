import React from 'react';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PaginationBar = () => {
  return ( 
    <Pagination className="justify-content-center py-5">
      <Pagination.Prev>
        <span aria-hidden="true"><FaChevronLeft /></span>
      </Pagination.Prev>
      <Pagination.Item href="#">1</Pagination.Item>
      <Pagination.Item href="#">2</Pagination.Item>
      <Pagination.Item href="#">3</Pagination.Item>
      <Pagination.Item href="#">4</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item href="#">10</Pagination.Item>
      <Pagination.Next>
        <span aria-hidden="true"><FaChevronRight /></span>
      </Pagination.Next>
    </Pagination>
  );
}
 
export default PaginationBar;
