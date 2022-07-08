import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Dashboard.scss";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="page-body">
        <PageHeader />
        <Outlet />
      </div>
    </div>
  );
}
