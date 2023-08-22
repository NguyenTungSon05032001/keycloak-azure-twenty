import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import UserService from "../services/UserService";
import "./login.css";

// axios.defaults.withCredentials = true;
const Login = () => {
  const handleClick = () => {
    UserService.doLogin();
  };

  return (
    <>
      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
        <h1>Redirect to Keycloak Login Page</h1>
        <div className="button-container">
          <input type="submit" onClick={handleClick}/>
        </div>
      </div>
    </>
  );
};

export default Login;
