import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckLogin(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);
  return <>{props.children}</>;
}