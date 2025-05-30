import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';  // Default import

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
