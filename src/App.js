import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './Component/Register';
import { useNavigate, useLocation } from 'react-router-dom';
import { getRole, getToken } from './utility/login';
import NavBar from './Component/Navbar';
import QuestionPaper from './Component/QuestionPaper';
import { ThemeProvider } from "styled-components";
// import { GlobalStyles  } from "./Component/GlobalStyles";
import {grey} from './theme';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(grey);
  // Redirect to login if token not found

  useEffect(() => {
    if (location.pathname != '/register') {
      if (!getToken()) {
        console.log("## APP Not logged in");
        navigate('/login', { state: '' });
        // return <Login setToken={setToken} />
      } else {
        navigate('/dashboard', { state: getRole() });
      }
    }

  }, []);

  return (
    <div className="wrapper" align='center' verticalalign='center'>
      <ThemeProvider theme={grey}>
        <NavBar />
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login />} />
          <Route path="/register" caseSensitive={false} element={<Register />} />
          <Route path="/dashboard" caseSensitive={false} element={<Dashboard />} />
          <Route path="/questionPaper" caseSensitive={false} element={<QuestionPaper />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
