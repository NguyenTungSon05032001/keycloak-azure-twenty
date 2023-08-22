import { Navigate } from "react-router-dom";
import UserService from "../services/UserService";

const RenderOnAuthenticated = ({ children }) => {
  return UserService.isLoggedIn() ? children : <Navigate to={`${process.env.PUBLIC_URL}/login`} />;
};

export default RenderOnAuthenticated;
