import { Navigate } from "react-router-dom";
import UserService from "../services/UserService";

const RenderOnAnonymous = ({ children }) => {
  return !UserService.isLoggedIn() ? children : <Navigate to={`${process.env.PUBLIC_URL}`} />;
};

export default RenderOnAnonymous;
