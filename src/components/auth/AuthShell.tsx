import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import LogoMark from "../LogoMark";

function AuthShell({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="auth-page">
      <header className="auth-top">
        <Link to="/" className="auth-brand" aria-label="Back to GoogleDoko">
          <LogoMark className="auth-logo" />
          <span className="auth-back-arrow" aria-hidden="true">
            <ArrowLeft size={18} strokeWidth={2.4} />
          </span>
          <span>Back to GoogleDoko</span>
        </Link>
      </header>
      <main className={`auth-main ${wide ? "wide" : ""}`}>{children}</main>
      <footer className="auth-foot">
        <p>© 2026 GoogleDoko, All Rights Reserved.</p>
        <div>
          <Link to="/about">Terms &amp; Conditions</Link>
          <Link to="/about">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}

export default AuthShell;
