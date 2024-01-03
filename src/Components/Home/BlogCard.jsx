import React from 'react';
import icon from '../../assest/images/Blogs Featured Image.png'
const BlogCard = () => {
    return (
        <div className="col">
        <div className="card">
          <img src={icon} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title mb-3">Lorem ipsum dolor sit amet</h4>
            <p className="card-text lh-1 small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in volu.</p>
          </div>
          <a href="#" className="text-black ms-3 mb-2">Rearn More</a>
        </div>
      </div>
      );
}
 
export default BlogCard;