import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './Component/Register';
function App() {
  const [role, setRole] = useState('');
  const setRoleForDashboard = (value) => {
    setRole(value);
  }
  return (
    <div className="wrapper" align='center' verticalalign='center'>
      <Router>
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login setRoleDashboard= {setRoleForDashboard}/>} />
          <Route path="/register" caseSensitive={false} element={<Register />} />
          <Route path="/dashboard" caseSensitive={false} element={<Dashboard role={role}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
