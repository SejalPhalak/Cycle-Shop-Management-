import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin-dashboard">Admin Dashboard</Link>
      <Link to="/user-dashboard">User Dashboard</Link>
    </nav>
  );
}