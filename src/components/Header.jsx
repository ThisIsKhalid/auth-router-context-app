import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {})
    .catch(error => {});
  }

  return (
    <div className="flex flex-row items-center navbar bg-primary justify-between">
      <div className="text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-2xl">BigBazar</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
        {user?.email && <span>Welcome, {user.email}</span> }
      </div>
      <div>
        {
          user?.email ?
          <button onClick={handleLogOut} className="btn btn-sm bg-blue-400 text-gray-800 hover:bg-fuchsia-600">Log Out</button> :
          <Link to='/login' className="btn btn-sm bg-blue-400 text-gray-800 hover:bg-fuchsia-600">Log In</Link>
        }
      </div>
    </div>
  );
};

export default Header;
