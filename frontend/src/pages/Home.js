import { UPLOAD_PERMISSION, TWENTY_PERMISSION } from "../config/config";
import UserService from "../services/UserService";
import "./app.css";

const App = () => {
  const handleClickStorage = () => {
    window.location.href = "https://hongpx.tk/azure-upload";
  };

  const handleClickTwenty = () => {
    window.location.href = "https://hongpx.tk/twenty";
  };

  if (
    UserService.hasRole(UPLOAD_PERMISSION) &&
    !UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
        <h1>Redirect to Azure Storage Upload Page</h1>
        <div className="button-container">
          <button type="submit" onClick={handleClickStorage}>
            Redirect to Storage
          </button>
        </div>
      </div>
    );
  } else if (
    !UserService.hasRole(UPLOAD_PERMISSION) &&
    UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
        <h1>Redirect to Twenty Web App Page</h1>
        <div className="button-container">
          <button type="submit" onClick={handleClickTwenty}>
            Redirect to Twenty App
          </button>
        </div>
      </div>
    );
  } else if (
    UserService.hasRole(UPLOAD_PERMISSION) &&
    UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
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
    );
  } else {
    return (
      <>
        <h1>Please Contact to Administrator to add your permission</h1>
      </>
    );
  }
};

export default App;
