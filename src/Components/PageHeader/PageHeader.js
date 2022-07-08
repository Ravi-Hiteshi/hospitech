import React from "react";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../Helpers/Global";
import "./PageHeader.scss";

export default function PageHeader() {
  const navigate = useNavigate();

  function onLogout() {
    setLogout();
    navigate("/");
  }
  return (                                                                                                                                                                                                                                                                                                                          
    <div className="page-header">
      <h5 className="text-light">Dashboard</h5>
      <button className="btn btn-light btn-sm ps-3 pe-3" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
