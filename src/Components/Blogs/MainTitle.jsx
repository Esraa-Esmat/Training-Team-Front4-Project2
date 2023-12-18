import React from 'react'
import { useSelector } from 'react-redux';

const MainTitle = () => {
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

    return (
        <div className={`main_title py-5 ${toggleDark} ? 'bg-dark text-light' : 'bg-light text-light`}>
          <h2>Our Blogs</h2>
          <p>
            Explore our Recent blogs to enrichen your information and keep up with
            new events
          </p>
        </div>
      );
}

export default MainTitle