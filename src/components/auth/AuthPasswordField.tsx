import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function passwordScore(value: string) {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  return score;
}

function AuthPasswordField({
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
  required = true,
  error,
  showStrength = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  showStrength?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const score = passwordScore(value);
  const labels = ["Too short", "Weak", "Fair", "Good", "Strong"];

  return (
    <label className={`auth-field${error ? " invalid" : ""}`}>
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <span className="auth-password-wrap">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
        />
        <button
          type="button"
          className="auth-eye"
          onClick={() => setVisible((open) => !open)}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </span>
      {showStrength && value ? (
        <span className={`auth-strength score-${score}`}>
          <span className="auth-strength-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          {labels[score]}
        </span>
      ) : null}
      {error ? <em className="auth-field-error">{error}</em> : null}
    </label>
  );
}

export default AuthPasswordField;
