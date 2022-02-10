import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

function Header(props) {
  const { user, logOut } = useAuth();
  return (
    <div className="header my-5">
      <Link to="/home">Home</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">LogIn</Link>
      <span className="mx-2">{user.displayName}</span>
      {user?.email && <button onClick={logOut}>SignOut</button>}
    </div>
  );
}

export default Header;
