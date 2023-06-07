import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loader || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
