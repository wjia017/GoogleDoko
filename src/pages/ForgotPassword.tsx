import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthShell from "../components/auth/AuthShell";
import { api } from "../api/client";

const forgotSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Please enter your email address")
    .trim(),
});

type ForgotFormData = yup.InferType<typeof forgotSchema>;

function ForgotPassword() {
  const [busy, setBusy] = useState(false);
  const [delivery, setDelivery] = useState("");
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: yupResolver(forgotSchema),
    defaultValues: { email: "" },
  });

  const email = watch("email");

  async function onSubmit(data: ForgotFormData) {
    if (busy) return;
    setBusy(true);
    setServerError("");
    try {
      const result = await api.forgotPassword(data.email.trim());
      setDelivery(result.delivery);
      setSent(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Could not send reset link");
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell>
      <div className="auth-card">
        {sent ? (
          <>
            <h1>Check your email</h1>
            <p className="auth-lead">
              {delivery === "development"
                ? "Development mode: if the account exists, its reset link is available in the API terminal. Email delivery has not been configured."
                : "If this email is registered, a password reset link has been sent."}
            </p>
            <Link to="/login" className="auth-btn">
              Back to Login
            </Link>
          </>
        ) : (
          <>
            <h1>Forgot your password?</h1>
            <p className="auth-lead">
              Enter the email address associated with your account and we&apos;ll
              send you a password reset link.
            </p>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <label className="auth-field">
                <span>Email Address</span>
                <input
                  type="email"
                  {...register("email")}
                  value={email || ""}
                  style={{ borderColor: errors.email ? "#ef4444" : undefined }}
                  onChange={(e) => setValue("email", e.target.value, { shouldValidate: true })}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
                {errors.email?.message && (
                  <span className="auth-field-error" style={{ color: "#ef4444", fontSize: 12, marginTop: 4, display: "block" }}>
                    {errors.email.message}
                  </span>
                )}
              </label>
              {serverError ? <p className="auth-error">{serverError}</p> : null}
              <button type="submit" className="auth-btn" disabled={busy}>
                {busy ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
            <Link to="/login" className="auth-back">
              Back to Login
            </Link>
          </>
        )}
      </div>
    </AuthShell>
  );
}

export default ForgotPassword;
