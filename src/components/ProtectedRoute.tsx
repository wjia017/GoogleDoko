import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAccount } from "../context/AccountContext";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAccount();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
