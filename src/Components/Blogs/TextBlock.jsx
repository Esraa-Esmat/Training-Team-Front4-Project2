import React from 'react'
import { useSelector } from 'react-redux';

const TextBlock = () => {
  const toggleDark = useSelector((state) => state.GlobalSlice.toggleDark);

  return (
    <div className={`${toggleDark} ? ' text-light' : ' text-dark`}>
      <h4 class="mt-4 mb-4">Lorem ipsum dolor sit amet</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, voluptatum rem quae odit, quis
        blanditiis est delectus necessitatibus quisquam exercitationem quos beatae fugiat? Optio laudantium,
        soluta quisquam excepturi ducimus placeat ratione minima. Corporis, assumenda nulla, accusamus
        temporibus sit, provident atque porro commodi voluptatum iste eius numquam reprehenderit.
        Consequuntur harum sequi eum quae magni ut vitae dignissimos soluta ea quibusdam pariatur id
        voluptates eveniet ipsam, reiciendis omnis, recusandae quas enim quo delectus? Laborum voluptate
        sequi ea vitae, possimus quos modi nihil! Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default TextBlock