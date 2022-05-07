import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './Component/Register';
import useToken from './hooks/useToken';
import useRole from './hooks/useRole';
import { useNavigate } from 'react-router-dom';
import {getRole, getToken} from './utility/login';

function App() {
  const navigate = useNavigate();
  const { role, setRole } = useRole();
  const { token, setToken } = useToken();
  // Redirect to login if token not found
  console.log("## APP", token);

  useEffect(() => {

    if (!getToken()) {
      console.log("## APP Not logged in");
       navigate('/login' ,{state: ''});
      // return <Login setToken={setToken} />
    }else {
      navigate('/dashboard' ,{state: getRole()});
    }
  }, []);

  const setRoleForDashboard = (value) => {
    setRole(value);
  }
  return (
    <div className="wrapper" align='center' verticalalign='center'>
      {/* <BrowserRouter> */}
          <Routes>
            <Route path="/login" caseSensitive={false} element={<Login  />} />
            <Route path="/register" caseSensitive={false} element={<Register />} />
            <Route path="/dashboard" caseSensitive={false} element={<Dashboard  />} />
          </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
