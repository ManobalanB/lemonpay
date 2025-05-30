// src/pages/index.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../components/lib_auth';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate('/tasks');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null;
}
