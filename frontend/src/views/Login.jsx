import { useState } from 'react';
import './Login.css'; // Import styles

export default function Login() {
  // Toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // Store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Submitted: ", formData);
    // API call will be added here later
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <form onSubmit={handleSubmit}>
          
          {/* Show name only for signup */}
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" onChange={handleChange} required />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} required />
          </div>

          {/* Show role only for signup */}
          {!isLogin && (
            <div className="form-group">
              <label>Select Role</label>
              <select name="role" onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          <button type="submit" className="btn-submit">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        {/* Toggle form text */}
        <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}