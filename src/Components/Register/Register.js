import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <div>
        <form>
          <div className="my-3">
            <label>Name:</label>
            <input type="name" placeholder="Enter Your Name" />
          </div>
          <div className="my-3">
            <label>Email:</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="my-3">
            <label>Password:</label>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <input type="submit" value="Submit" className="mx-3" />
          <Link to="/login">Already Registered?</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
