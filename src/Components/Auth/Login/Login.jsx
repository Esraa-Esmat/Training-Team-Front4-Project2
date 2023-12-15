import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate =  useNavigate()
// const hangleLogin =()=>{
//   navigate('/admindashboard')
//   navigate('/userdashboard')
// }
  
  return (
    <>
      <form className="my-5 w-50 m-auto">
        <div className="container">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" style={{ backgroundColor:"#090fec" , color:"#fff"}} className="btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Login