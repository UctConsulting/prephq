// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Navbar from './common/navigation/Navbar';
import Footer from './common/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Practice from './pages/practice/Practice';
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import Search from './pages/search/Search'
import Error404 from './pages/error/Error404';
import AccountConfirm from './pages/confirm/Confirm';
import Login from './pages/login/login';
import Logout from './pages/logout/logout';
import Profile from './pages/profile/profile';
import Register from './pages/register/register';
import ResetPassword from './pages/reset/reset';
import ProfileEdit from './pages/profileedit/Profileedit';
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import DataSciencePage from './pages/domain/dataScience/DataScience';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('adminLoggedIn') === 'true');
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('adminLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
  };

  // hide navbar/footer if on admin page
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<AccountConfirm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <PrivateRoute>
              <ProfileEdit />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <AdminLogin onLogin={handleLogin} />
            )
          }
        />

        {/* Domains */}
        <Route path="/data-science" element={<DataSciencePage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      {!hideLayout && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

export default App;
