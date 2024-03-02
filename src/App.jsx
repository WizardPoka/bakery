// app.jsx

// imports
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import Users from "./components/Users";
import Home from "./components/Home/Home";
import Login from "./components/Login"

// импорт хука и сам хук ломает код 
// import useNavigation from "./components/useNavigation";

function App() {
  // почему то используя этот хук в распределительной страничке, он ломает код
  // const { navigateTo } = useNavigation();

  return (
    <Router>
      <div>
        <Routes>
          {/* Начальная страница Home */}
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />  
          <Route path="/login" element={<Login />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
