import { Check } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";

import AuthShell from "../components/auth/AuthShell";
import { useAccount } from "../context/AccountContext";

function VendorSignupStatus() {
  const { isLoggedIn } = useAccount();
  const location = useLocation();
  const signupState = (location.state as { registered?: boolean; email?: string } | null) ?? {};

  if (!isLoggedIn && !signupState.registered) {
    return <Navigate to="/signup/vendor" replace />;
  }

  return (
    <AuthShell>
      <div className="auth-card auth-status">
        <div className="auth-success-icon" aria-hidden="true">
          <Check size={34} strokeWidth={2.4} />
        </div>
        <h1>Your vendor account has been created</h1>
        <p className="auth-lead">
          Thank you for joining GoogleDoko. Your vendor information will be
          reviewed before your products are published. Please log in to access your account.
        </p>

        <dl className="auth-status-list">
          <div>
            <dt>Account</dt>
            <dd>Vendor account created</dd>
          </div>
          <div>
            <dt>Verification</dt>
            <dd className="review">Under review</dd>
          </div>
          <div>
            <dt>Next step</dt>
            <dd>Log in to access and manage your vendor dashboard.</dd>
          </div>
        </dl>

        <Link
          to="/login"
          state={{ role: "vendor", email: signupState.email, signup: true }}
          className="auth-btn"
        >
          Log in as Vendor
        </Link>
      </div>
    </AuthShell>
  );
}

export default VendorSignupStatus;
