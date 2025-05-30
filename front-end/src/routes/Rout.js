// import React from 'react';
// import { Routes, Route , Navigate } from 'react-router-dom';

// import HomePage from '../pages/index';
// import TasksPage from '../pages/tasks';

// import Login from '../pages/login';
// import Signup from '../pages/signup';

// const Rout = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} /> 
      
//       <Route path="/signup" element={<Signup />} />
//       {/* <Route path="/signup" element={<SignupPage />} /> */}
//       <Route path="/tasks" element={<TasksPage />} />
//       {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
//     </Routes>
//   );
// };
// export default Rout
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/index';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import TasksPage from '../pages/tasks';  // <--- Make sure this is here

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default Rout;
