import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () =>
  root.render(
    <React.StrictMode>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </React.StrictMode>
  );

UserService.initKeycloak(renderApp);
HttpService.configure();
