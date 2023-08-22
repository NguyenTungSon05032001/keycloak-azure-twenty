import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ children, ...rest }) => {
  const [cookies] = useCookies(["accessToken"]);
  return cookies.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
