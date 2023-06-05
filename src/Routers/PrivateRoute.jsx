import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loader) {
    return "lllllllllllllllllllllllloooooooooodaingggggggggggggggggg.................";
  }
  return <Navigate to="/signIN" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
