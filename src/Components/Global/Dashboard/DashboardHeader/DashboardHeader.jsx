import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import { TbArrowsDownUp } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setSortData } from '../../../../Redux/Reducers/GlobalSlice';

const DashboardHeader = ({ pageTitle, display }) => {
  const sortData = useSelector((state) => state.GlobalSlice.sortData);
  const searchQuery = useSelector((state) => state.GlobalSlice.searchQuery);
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  const dispatch = useDispatch()

  const handleSortClick = () => {
    dispatch(setSortData())
    console.log(sortData);
  }
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <Row className="mt-3  bg-transparent" style={{width:'94%' ,marginLeft:'30px'} }>
      <Col sm={5}>
        <h3 className="pt-4 mb-0 ps-4">{pageTitle}</h3>
      </Col>


      <Col sm={2} className={`mb-0 ${display ? display : ""} `}>
        <Form className='row justify-content-end mt-4'>

          <InputGroup>

            <Form.Control
              type='text'
              aria-describedby="inputGroup-sort"
              placeholder="sort by"
            />


            <InputGroup.Text id="inputGroup-sort" onClick={handleSortClick} style={{ cursor: 'pointer' }}>
              <TbArrowsDownUp />
            </InputGroup.Text>

          </InputGroup>
        </Form>
      </Col>

      <Col sm={5} className={`mb-0 pe-5 ${display ? display : ""}`}>
        <Form className='row justify-content-end mt-4'>

          <InputGroup>
            <InputGroup.Text id="inputGroup-search">
              <FiSearch />
            </InputGroup.Text>

            <Form.Control
              type='text'
              aria-describedby="inputGroup-search"
              placeholder="Search list ..."
              onChange={handleSearch}
              value={searchQuery}

            />
          </InputGroup>

        </Form>
      </Col>
    </Row>
  );
}

export default DashboardHeader;
