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

  const login = async () => {
    console.log(email, password);
    axios({
      data: {
        email: email,
        password: password,
      },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://demo-env-1.eba-dkupj2uf.ap-south-1.elasticbeanstalk.com/auth/login",
    }).then((e) => {
      if (e.data === "Login Successful") {
        navigate("/posts");
      } else {
        alert("Login Failed");
      }
      console.log(e.data);
    });
  };

  const register = () => {
    axios({
      data: {
        name: name,
        email: email,
        password: password,
      },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://demo-env-1.eba-dkupj2uf.ap-south-1.elasticbeanstalk.com/auth/register",
    }).then((e) => {
      if (e.data === "User Registered") {
        toogle();
        alert(e.data);
      } else {
        alert(e.data);
      }
      console.log(e.data);
    });
  };

  return (
    <>
      <h1>Welcome To HireMe Powered By @SpringBoot and AWS</h1>
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
                // login();
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
