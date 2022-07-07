import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./Views/Dashboard/Dashboard";
import Login from "./Views/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
