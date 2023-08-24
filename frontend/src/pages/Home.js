import { UPLOAD_PERMISSION, TWENTY_PERMISSION } from "../config/config";
import UserService from "../services/UserService";
import { Button } from "antd";
import "./app.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleClickStorage = () => {
    window.location.href = "https://hongpx.tk/azure-upload";
  };

  const handleClickTwenty = () => {
    window.location.href = "https://hongpx.tk/twenty";
  };

  const onLogout = () => {
    removeCookie("accessToken");
    removeCookie("userName");
    UserService.doLogout();
    navigate(`${process.env.PUBLIC_URL}/`);
  };

  if (
    UserService.hasRole(UPLOAD_PERMISSION) &&
    !UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <>
        <div className="flex w-2/5 m-auto flex-row">
          <div className="flex justify-between items-center w-full p-2 bg-neutral-200 rounded-b-lg">
            <div>Welcome, {cookies.userName}</div>
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
          <h1>Redirect to Azure Storage Upload Page</h1>
          <div className="button-container">
            <button type="submit" onClick={handleClickStorage}>
              Redirect to Storage
            </button>
          </div>
        </div>
      </>
    );
  } else if (
    !UserService.hasRole(UPLOAD_PERMISSION) &&
    UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <>
        <div className="flex w-2/5 m-auto flex-row">
          <div className="flex justify-between items-center w-full p-2 bg-neutral-200 rounded-b-lg">
            <div>Welcome, {cookies.userName}</div>
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
          <h1>Redirect to Twenty Web App Page</h1>
          <div className="button-container">
            <button type="submit" onClick={handleClickTwenty}>
              Redirect to Twenty App
            </button>
          </div>
        </div>
      </>
    );
  } else if (
    UserService.hasRole(UPLOAD_PERMISSION) &&
    UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <>
        <div className="flex w-2/5 m-auto flex-row">
          <div className="flex justify-between items-center w-full p-2 bg-neutral-200 rounded-b-lg">
            <div>Welcome, {cookies.userName}</div>
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
          <h1>Redirect to Azure Storage Upload Page</h1>
          <div className="button-container">
            <button type="submit" onClick={handleClickStorage}>
              Redirect to Storage
            </button>
          </div>
          <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
            <h1>Redirect to Twenty Web App Page</h1>
            <div className="button-container">
              <button type="submit" onClick={handleClickTwenty}>
                Redirect to Twenty App
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex w-2/5 m-auto flex-row">
          <div className="flex justify-between items-center w-full p-2 bg-neutral-200 rounded-b-lg">
            <div>Welcome, {cookies.userName}</div>
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>
          </div>
        </div>
        <h1>Please Contact to Administrator to add your permission</h1>
      </>
    );
  }
};

export default App;
