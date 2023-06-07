import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminPrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loader || isAdminLoading) {
    return <h2>uryeruy eyu</h2>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;
