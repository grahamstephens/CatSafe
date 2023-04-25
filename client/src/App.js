import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import ChatRoomPage from './pages/ChatRoomPage';
import ResourcesPage from './pages/ResourcesPage';
// import SignupPage from './components/pages/SignupPage';
// import LoginPage from './components/pages/LoginPage';
// import DashboardPage from './components/pages/DashboardPage';
// import PrivateRoute from './components/routing/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/rsp' element={<RoleSelectionPage />} />
      <Route path='/chat' element={<ChatRoomPage />} />
      <Route path='/resources' element={<ResourcesPage />} />
      {/* <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} /> */}
    </Routes>
  );
};

export default App;
