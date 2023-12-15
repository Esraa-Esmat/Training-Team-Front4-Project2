import React, { useState, useEffect } from 'react';

const Counter = ({ endValue , name }) => {
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
      <ul className='d-inline-block py-4'>
        <li className="no-1 fs-bold">{count}+</li>
        <li className="fs-4">{name}</li>
      </ul>
    </>
  );
};

export default Counter;
