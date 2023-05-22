import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../Auth-services/auth.service";
import axios, { Axios } from "axios";
import { useState, useRef, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log(email, password)
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/about");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="main">
        <div className="sub-main">
          <form action="action_page.php" method="post" onSubmit={handleLogin}>
            <div className="logincontainer"> تسجيل الدخول</div>
            <div className="container">
              <label htmlFor="uname">
                <b>الكود الالكتروني</b>
              </label>
              <input
                type="text"
                id="name"
                placeholder="الكود الالكتروني"
                name="uname"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="psw">
                <b>كلمة السر</b>
              </label>
              <input
                type="password"
                id="date"
                placeholder="كلمة السر"
                name="psw"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">تسجيل دخول</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
