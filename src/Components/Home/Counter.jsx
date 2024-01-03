import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

const Counter = ({ endValue, name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === endValue) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endValue]);

  return (
    <>
      <Col   >
        <div className='py-4 text-center'>
          <h2 className="fw-bold our-values-title">{count}+</h2>
          <p className="fs-4 our-values-p">{name}</p>
        </div>
      </Col>
    </>
  );
};

export default Counter;
