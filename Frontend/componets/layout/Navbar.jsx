import React from "react";
import { Link, NavLink } from "react-router-dom";
import navBarStyles from "../../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-white" 
      style={{ 
        borderBottom: '1px solid #eaeaea', 
        padding: '1rem 0',
        backdropFilter: 'blur(8px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <div className="container">
        {/* Logo - Tông màu tối tối giản, font chữ hiện đại */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#111111', fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
          MyBlog
        </Link>

        {/* Button mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          style={{ shadow: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto gap-2">
            
{/* 
            <li className="nav-item">
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "#111111" : "#666666",
                  fontWeight: isActive ? "600" : "400",
                  transition: "all 0.2s ease"
                })}
                className="nav-link"
              >
                About
              </NavLink>
            </li>
           
           
            <li className="nav-item">
              <NavLink
                to="/blog"
                style={({ isActive }) => ({
                  color: isActive ? "#111111" : "#666666",
                  fontWeight: isActive ? "600" : "400",
                  transition: "all 0.2s ease"
                })}
                className="nav-link"
              >
                Blog
              </NavLink>
            </li>
*/}
          </ul>

          {/* Auth Buttons - Thiết kế nút tinh tế, đồng bộ Portfolio */}
          <div className="d-flex gap-2 align-items-center mt-3 mt-lg-0">
            <Link 
              to="/login" 
              className="btn btn-link text-decoration-none" 
              style={{ color: '#555555', fontWeight: '500', fontSize: '0.95rem' }}
            >
              Login
            </Link>

            <Link 
              to="/register" 
              className="btn" 
              style={{ 
                backgroundColor: '#111111', 
                color: '#ffffff', 
                borderRadius: '6px',
                padding: '0.5rem 1.2rem',
                fontSize: '0.95rem',
                fontWeight: '500',
                border: 'none',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#333333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#111111'}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};