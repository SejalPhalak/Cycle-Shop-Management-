// Import routing tools
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import navbar and pages
import Navbar from './components/Navbar.jsx';
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import AdminDashboard from './views/AdminDashboard.jsx';
import UserDashboard from './views/UserDashboard.jsx';

export default function App() {
  return (
    <BrowserRouter>
      {/* Show Navbar on all pages */}
      <Navbar />
      
      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}