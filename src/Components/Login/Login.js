import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () => {
  const { googleSignIn } = useAuth();
  return (
    <div>
      <h2>Please LogIn</h2>
      <button onClick={googleSignIn} className="btn btn-primary">
        Google Sign In
      </button>
      <br />
      <br />
      <form>
        <div className="my-3">
          <label>Email:</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="my-3">
          <label>Password:</label>
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <input type="submit" value="Submit" className="mx-3" />
        <Link to="/register">NewUser?</Link>
      </form>
    </div>
  );
};

export default Login;
