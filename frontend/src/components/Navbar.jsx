import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Cycle Shop</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin-dashboard">Admin</Link>
        <Link to="/user-dashboard">User</Link>
      </div>
    </nav>
  );
}