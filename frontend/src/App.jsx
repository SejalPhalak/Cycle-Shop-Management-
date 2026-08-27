// import react and router
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import navbar
import Navbar from './components/Navbar';

// import views
import Home from './views/Home';
import UserLogin from './views/UserLogin';
import AdminLogin from './views/AdminLogin';

// main app component
export default function App() {
  return (
    <BrowserRouter>
      {/* navbar will show on all pages */}
      <Navbar />
      
      {/* define page routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}