import { useMemo, useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAccount } from "../context/AccountContext";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAccount();
  const [email, setEmail] = useState("lahana.lawaju@gmail.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  const hint = useMemo(
    () => "Demo login: lahana.lawaju@gmail.com / password123",
    [],
  );

  const from =
    (location.state as { from?: string } | null)?.from || "/account";

  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }
    login();
    navigate(from, { replace: true });
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="profile-page">
        <div className="profile-page-inner account-login">
          <h1>Log in</h1>
          <section className="profile-shell">
            <p className="account-login-hint">{hint}</p>
            <form className="account-form" onSubmit={submit}>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              {error ? <p className="account-form-error">{error}</p> : null}
              <button type="submit" className="account-btn">
                Continue
              </button>
            </form>
            <p className="account-login-note">
              This is a frontend-only demo. No server password is checked.
            </p>
            <Link to="/">Back to Home</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
