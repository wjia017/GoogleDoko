import { Navigate, Outlet } from "react-router-dom";

import { useAccount } from "../../context/AccountContext";

function BlockVendor() {
  const { isLoggedIn, user } = useAccount();

  if (isLoggedIn && (user.role === "vendor" || user.role === "admin")) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/vendor"} replace />;
  }

  return <Outlet />;
}

export default BlockVendor;
