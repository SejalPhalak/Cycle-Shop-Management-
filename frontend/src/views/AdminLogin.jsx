// import react
import React from 'react';
import './Login.css';

// admin login component
export default function AdminLogin() {
  return (
    // main container
    <div className="login-wrapper admin-bg">
      <div className="login-box">
        
        <h2>Admin Portal</h2>
        <p>Secure login for cycle shop management.</p>
        
        {/* login form */}
        <form>
          <div className="input-group">
            <label>Admin Username</label>
            <input type="text" placeholder="Enter admin username" required />
          </div>
          
          <div className="input-group">
            <label>Secret Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          
          <button type="submit" className="login-submit-btn admin-btn">Login as Admin</button>
        </form>
        
      </div>
    </div>
  );
}