import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckLogin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (location.pathname !== "/") {
        navigate(location.pathname);
      } else {
        navigate("/dashboard");
      }
    } else {
      navigate("/");
    }
  }, []);
  return <>{props.children}</>;
}
