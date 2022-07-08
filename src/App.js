import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Views/Dashboard/Dashboard";
import Login from "./Views/Login/Login";
import OPDEntry from "./Views/OPDEntry/OPDEntry";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="opd" element={<OPDEntry />} />
        <Route
          path="*"
          element={
            <center className="text-secondary p-5">
              <strong className="text-danger">404</strong> Module not found
            </center>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
