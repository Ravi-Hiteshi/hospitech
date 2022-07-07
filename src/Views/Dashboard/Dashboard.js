import React from "react";
import { useNavigate } from "react-router-dom";
import CheckLogin from "../../Components/CheckLogin/CheckLogin";
import { setLogout } from "../../Helpers/Global";
import "./Dashboard.scss";
import DashboardLayout from "./DashboardLayout";

export default function Dashboard() {
  const navigate = useNavigate();
  function onLogout() {
    setLogout();
    navigate("/");
  }
  return (
    <CheckLogin>
      <DashboardLayout />
    </CheckLogin>
  );
}
