import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RenderOnAnonymous from "./utils/RenderOnAnonymous";
import RenderOnAuthenticated from "./utils/RenderOnAuthenticated";
import { useCookies } from "react-cookie";
import Home from "./pages/Home";
import UserService from "./services/UserService";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  useEffect(() => {
    if (UserService.isLoggedIn()) {
      setCookie("accessToken", UserService.getToken(), { maxAge: 3600 });
      setCookie("userName", UserService.getUsername(), { maxAge: 3600 });
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <RenderOnAnonymous>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
        </RenderOnAuthenticated>
        {/* <Route element={<PrivateRoute />}> */}
        {/* </Route> */}
      </BrowserRouter>
    </>
  );
}

export default App;
