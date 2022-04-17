import { useAuth } from "contexts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoutes = () => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
