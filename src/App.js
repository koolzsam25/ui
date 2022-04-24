import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from './Component/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './Component/Register';
function App() {
  return (
    <div className="wrapper" align='center' verticalAlign='center'>
      <Router>
      <Routes>
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
