
import React from "react";
import { Link, NavLink } from "react-router-dom";
import navBarStyles from "../../styles/Navbar.module.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e0f7fa', borderBottom: '2px solid #80deea'}}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/" style={{color: '#00695c', fontSize: '1.5rem'}}>
          MyBlog
        </Link>

        {/* Button mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex gap-2">
            <Link to="/login" className="btn" style={{color: '#00695c', borderColor: '#00695c', border: '1px solid #00695c'}}>
              Login
            </Link>

            <Link to="/register" className="btn" style={{backgroundColor: '#00bcd4', color: 'white', border: 'none'}}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

