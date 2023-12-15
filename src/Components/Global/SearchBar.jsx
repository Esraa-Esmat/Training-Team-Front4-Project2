import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';import { Row } from 'react-bootstrap';
;

const SearchBar = ({pageTitle}) => {
    return ( 
    <Row>
        <div as={Col} className='w-50'>
        <h3  className="pt-4 mb-0 ps-4">{pageTitle}</h3>
        </div>
        <div as={Col} className='w-50 mb-0 pe-5'>
         <Form className='row justify-content-end mt-4'> 
         <InputGroup className="mb-3 w-25">
           <Form.Control
             type='text'
             aria-describedby="inputGroup-sort"
             placeholder="sort by"
           />
           <InputGroup.Text id="inputGroup-sort">
             <i className="fas fa-sort"></i>
           </InputGroup.Text>
         </InputGroup>
   
         <InputGroup className="mb-3 w-50">
         <InputGroup.Text id="inputGroup-search">
         <i className="fas fa-search" aria-hidden="true"></i>
           </InputGroup.Text>
           <Form.Control
             type='text'
             aria-describedby="inputGroup-search"
             placeholder="Search list ..."
           />
           
         </InputGroup>
         </Form>
        </div>
     </Row>
     );
}
 
export default SearchBar;