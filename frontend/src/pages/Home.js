import { UPLOAD_PERMISSION, TWENTY_PERMISSION } from "../config/config";
import UserService from "../services/UserService";
import { Button, Modal } from "antd";
import "./app.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import azureIcon from "../images/azure-storage.png";
import twentyIcon from "../images/twenty.svg";

const App = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleClickStorage = () => {
    window.location.href = "https://nevtestserver.com/azure-upload";
  };

  const handleClickTwenty = () => {
    window.location.href = "https://nevtestserver.com/twenty";
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
        <Modal
          title={`Welcome, ${cookies.userName}`}
          open={true}
          footer={[
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>,
          ]}
        >
          <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
            <div className="button-container">
              <p>
                <img src={azureIcon} alt="image" height={100} width={100} />
              </p>
              <button type="submit" onClick={handleClickStorage}>
                Redirect to Azure Storage Account
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  } else if (
    !UserService.hasRole(UPLOAD_PERMISSION) &&
    UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <>
        <Modal
          title={`Welcome, ${cookies.userName}`}
          open={true}
          footer={[
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>,
          ]}
        >
          <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
            <div className="button-container1">
              <p>
                <img src={twentyIcon} alt="image" height={100} width={100} />
              </p>
              <button type="submit" onClick={handleClickTwenty}>
                Redirect to Twenty CRM Web App
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  } else if (
    UserService.hasRole(UPLOAD_PERMISSION) &&
    UserService.hasRole(TWENTY_PERMISSION)
  ) {
    return (
      <>
        <Modal
          title={`Welcome, ${cookies.userName}`}
          open={true}
          footer={[
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>,
          ]}
        >
          <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
            <div className="button-container">
              <p>
                <img src={azureIcon} alt="image" height={100} width={100} />
              </p>
              <button type="submit" onClick={handleClickStorage}>
                Redirect to Azure Storage Account
              </button>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
            <div className="button-container1">
              <p>
                <img src={twentyIcon} alt="image" height={100} width={100} />
              </p>
              <button type="submit" onClick={handleClickTwenty}>
                Redirect to Twenty CRM Web App
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal
          title={`Welcome, ${cookies.userName}`}
          open={true}
          footer={[
            <Button className="bg-white" onClick={() => onLogout()}>
              Logout
            </Button>,
          ]}
        >
          <h1>Please Contact to Administrator to add your permission</h1>
        </Modal>
      </>
    );
  }
};

export default App;
