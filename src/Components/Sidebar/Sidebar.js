import React from "react";
import { Link, useLocation } from "react-router-dom";
import Divider from "../Divider/Divider";
import navigationData from "./NavigationData";
import "./Sidebar.scss";

export default function Sidebar() {
  const location = useLocation();

  function generateNavigation(item, index) {
    return (
      <li
        key={index + "_" + item.title}
        className={`nav-item ${
          location.pathname === item.path && "nav-active"
        }`}
      >
        <Link to={item.path}>{item.icon} {item.title}</Link>{" "}
      </li>
    );
  }
  return (
    <div className="sidebar-main">
      <div className="sidebar-logo">HOSPITECH <i className="text-warning">v2.22</i></div>
      <div className="sidebar-nav">
        <ul>{navigationData.map(generateNavigation)}</ul>
      </div>
    </div>
  );
}
