import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../components/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    if (!hasLoggedOut.current) {
      logout();
      toast.success('Logout successful!');
      hasLoggedOut.current = true;
      setTimeout(() => navigate('/'), 1000);
    }
  }, [logout, navigate]);

  return (
    <>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  )
}