import React from "react";
import CheckLogin from "../../Components/CheckLogin/CheckLogin";
import "./Dashboard.scss";
import DashboardLayout from "./DashboardLayout";

export default function Dashboard() {
  return (
    <CheckLogin>
      <DashboardLayout />
    </CheckLogin>
  );
}
