import React from "react";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../Helpers/Global";
import "./Dashboard.scss";

export default function DashboardLayout() {
  const navigate = useNavigate();

  function onLogout() {
    setLogout();
    navigate("/");
  }

  return (
    <div className="dashboard-layout">
      <div className="sidebar-container"></div>
      <div className="page-body">
        <div className="page-header">
          <h5 className="text-light">Dashboard</h5>
          <button className="btn btn-light btn-sm ps-3 pe-3" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
