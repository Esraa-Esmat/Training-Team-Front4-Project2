import React from 'react'

const Register = () => {
  return (
    <>
       <form className="my-5 w-50 m-auto">
        <div className="container">
          <div className="mb-3">
            <label className="form-label">Username </label>
            <input type="text" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email </label>
            <input type="email" className="form-control" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" style={{ backgroundColor:"#090fec" , color:"#fff"}} className="btn">
            Sign UP
          </button>
        </div>
      </form>
    </>
  )
}

export default Register