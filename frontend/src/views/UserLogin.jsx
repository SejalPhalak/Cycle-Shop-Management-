// import react
import React from 'react';
import './Login.css';

// user login component
export default function UserLogin() {
  return (
    // main container
    <div className="login-wrapper">
      <div className="login-box">
        
        <h2>User Login</h2>
        <p>Welcome back! Please login to your account.</p>
        
        {/* login form */}
        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          
          <button type="submit" className="login-submit-btn">Login as User</button>
        </form>
        
      </div>
    </div>
  );
}