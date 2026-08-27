// import react and router link
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// navbar component
export default function Navbar() {
  return (
    // main navbar container
    <nav className="navbar">
      
      {/* left logo section */}
      <div className="navbar-logo">
        <Link to="/">
          <div className="logo-icon">🚲</div>
          <div className="logo-text">
            <span className="brand-name">CycleMate</span>
            <span className="tagline">~ Ride made effortless</span>
          </div>
        </Link>
      </div>

      {/* center pill shaped menu */}
      <div className="navbar-center-pill">
        <ul className="navbar-links">
          <li><Link to="/" className="active-link">Home</Link></li>
          <li><Link to="/">Fleet</Link></li>
          <li><Link to="/">Pricing</Link></li>
          <li><Link to="/">Bookings</Link></li>
          <li><Link to="/">Vendors</Link></li>
        </ul>
      </div>

      {/* right side auth buttons */}
      <div className="navbar-auth">
        
        {/* login dropdown container */}
        <div className="dropdown">
          <button className="login-btn">
            <span className="login-arrow">➔</span> Login
          </button>
          
          {/* dropdown menu options */}
          <div className="dropdown-menu">
            <Link to="/user-login">User Login</Link>
            <Link to="/admin-login">Admin Login</Link>
          </div>
        </div>

        {/* sign up button */}
        <button className="signup-btn">Sign Up</button>
      </div>

    </nav>
  );
}