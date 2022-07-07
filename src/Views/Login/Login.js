import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CheckLogin from "../../Components/CheckLogin/CheckLogin";
import { checkIsLoggedIn, setLoggedIn } from "../../Helpers/Global";
import "./Login.scss";

export default function Login() {
  const userIdRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (userIdRef) userIdRef.current.focus();
  }, []);

  function onLogin(e) {
    setLoggedIn("asd321as3d213a2sd453as4d31a");
    navigate("/dashboard");
  }

  return (
    <CheckLogin>
      <div className="login-page">
        <div className="login-card">
          <h5>Login</h5>
          <br />
          <label>User ID</label>
          <input type="text" placeholder="User id" ref={userIdRef} />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <br />
          <div
            className="btn btn-success btn-sm mx-auto w-75"
            onClick={onLogin}
          >
            Login
          </div>
        </div>
        <br />
        <h6 className="info-white">Hospitech India Pvt. Ltd.</h6>
      </div>
    </CheckLogin>
  );
}
