import '../style/TaskList.module.css';
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }



import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import HomePage from '../pages/index';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import TasksPage from '../pages/tasks';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default AppRoutes;  // Default export
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Rout from '../routes/Rout'; // or wherever your Router component is

// function App() {
//   return (
//     <BrowserRouter>
//       <Rout />
//     </BrowserRouter>
//   );
// }

// export default App;
