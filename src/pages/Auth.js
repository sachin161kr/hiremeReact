import { useState } from "react";
import "../css/Auth.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const [showName, setShowName] = useState(false);
  const toogle = () => {
    if (showName === true) {
      setShowName(false);
    } else {
      setShowName(true);
    }
  };

  const login = () => {
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((e) => {
        console.log(e);
      });
  };

  const register = () => {
    axios
      .post("http://localhost:8080/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>Welcome To HireMe Powered By @SpringBoot</h1>
      <div id="auth-body">
        <div id="auth-form">
          {showName && (
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="input"
              placeholder="name"
            />
          )}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input"
            placeholder="email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input"
            placeholder="password"
          />
          {!showName && (
            <button
              onClick={() => {
                navigate("/posts");
              }}
              className="btn"
            >
              Login
            </button>
          )}
          {!showName && (
            <button onClick={toogle} className="btn">
              Join Now
            </button>
          )}
          {showName && (
            <>
              <button onClick={toogle} className="btn">
                Register
              </button>
              <button onClick={toogle} className="btn">
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
