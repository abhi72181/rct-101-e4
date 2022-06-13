import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth.actions";
const Navbar = () => {
  const {isAuthenticated}=useSelector((state)=>state.auth.data)
  const dispatch=useDispatch()
  const handleLogout=()=>{
    dispatch(logout())
  }
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link">Logo</a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">cart:0</div>
        {isAuthenticated?<button data-cy="navbar-login-logout-button" onClick={handleLogout}>Logout</button>:<button data-cy="navbar-login-logout-button">Login</button>}
      </div>
    </div>
  );
};

export default Navbar;
