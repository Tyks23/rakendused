import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from "../store";
import {logoutUser} from "../store/actions";
import {Button} from "antd";
import './Nav.css';

function Auth() {
  const [state, dispatch] = useContext(Context);
  const {user} = state.auth;
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  if (user) {
    return (
      <>
        <span>Logged in as {user.firstName} {user.lastName}</span>
        <Button onClick={handleLogout}>Log out</Button>
      </>
    )
  }

  return (
    <>
      <Link to="/login" className = "NavLink">
        <Button type="default">Log in</Button>
      </Link>
      <Link to="/signup" className = "NavLink">
      <Button type="default">Sign up</Button>
      </Link>
    </>
  )
}

function Nav() {
  return (
    <>
      <Link to="/" className = "NavLink">
      <Button type="default">Homepage</Button>
      </Link>
      <Link to="/posts" className = "NavLink">
      <Button type="default">Posts</Button>
      </Link>
      <Auth/>
    </>
  );
}

export default Nav;
