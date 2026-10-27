import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

import TopBar from "./TopBar";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { useAccount } from "../context/AccountContext";
import { authPromptCopy, type AuthIntent } from "../context/AuthFlowContext";

function AuthGate({ intent }: { intent: AuthIntent }) {
  const location = useLocation();
  const copy = authPromptCopy(intent);
  const from = `${location.pathname}${location.search}`;

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="auth-gate-page">
        <div className="auth-prompt-card static">
          <h1>{copy.title}</h1>
          <p>{copy.message}</p>
          <div className="auth-prompt-actions">
            <Link to="/login" state={{ from }} className="auth-btn">
              Login
            </Link>
            <Link to="/signup" state={{ from }} className="auth-btn ghost">
              Create Account
            </Link>
            <Link to="/" className="auth-prompt-continue">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ProtectedRoute({
  children,
  intent = "account",
}: {
  children: ReactNode;
  intent?: AuthIntent;
}) {
  const { isLoggedIn } = useAccount();

  if (!isLoggedIn) {
    return <AuthGate intent={intent} />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
