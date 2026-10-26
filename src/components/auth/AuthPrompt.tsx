import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuthFlow } from "../../context/AuthFlowContext";

function AuthPrompt() {
  const navigate = useNavigate();
  const { prompt, copy, pending, closePrompt, clearPending } = useAuthFlow();

  if (!prompt || !copy) {
    return null;
  }

  const from = pending?.returnTo || "/";

  return (
    <div className="auth-prompt-backdrop" role="presentation" onClick={() => clearPending()}>
      <div
        className="auth-prompt-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-prompt-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="auth-prompt-close"
          aria-label="Close"
          onClick={() => {
            clearPending();
          }}
        >
          <X size={18} />
        </button>
        <h2 id="auth-prompt-title">{copy.title}</h2>
        <p>{copy.message}</p>
        <div className="auth-prompt-actions">
          <button
            type="button"
            className="auth-btn"
            onClick={() => {
              closePrompt();
              navigate("/login", { state: { from } });
            }}
          >
            Log In
          </button>
          <button
            type="button"
            className="auth-btn ghost"
            onClick={() => {
              closePrompt();
              navigate("/signup", { state: { from } });
            }}
          >
            Create Account
          </button>
          {copy.showContinue ? (
            <button type="button" className="auth-prompt-continue" onClick={() => clearPending()}>
              Continue Shopping
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AuthPrompt;
