import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthShell from "../components/auth/AuthShell";
import AuthPasswordField from "../components/auth/AuthPasswordField";
import { api } from "../api/client";
import { isStrongPassword } from "../utils/fileToDataUrl";

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required("New password is required")
    .test("is-strong", "Use 8+ characters with letters and numbers", (val) =>
      isStrongPassword(val || "")
    ),
  confirm: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

type ResetFormData = yup.InferType<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const [params] = useSearchParams();
  const [serverError, setServerError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ResetFormData>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: { password: "", confirm: "" },
  });

  const password = watch("password");
  const confirm = watch("confirm");

  async function onSubmit(data: ResetFormData) {
    setBusy(true);
    setServerError("");
    try {
      await api.resetPassword(params.get("token") || "", data.password);
      setDone(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Could not reset password");
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell>
      <div className="auth-card">
        <h1>{done ? "Password updated" : "Set a new password"}</h1>
        {done ? (
          <Link className="auth-btn" to="/login">
            Log in
          </Link>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <AuthPasswordField
              label="New password"
              value={password || ""}
              onChange={(val) => setValue("password", val, { shouldValidate: true })}
              placeholder="8+ characters, letters and numbers"
              autoComplete="new-password"
              showStrength
              error={errors.password?.message}
            />
            <AuthPasswordField
              label="Confirm password"
              value={confirm || ""}
              onChange={(val) => setValue("confirm", val, { shouldValidate: true })}
              placeholder="Re-enter password"
              autoComplete="new-password"
              error={errors.confirm?.message}
            />
            {serverError && (
              <p className="auth-error" role="alert">
                {serverError}
              </p>
            )}
            <button className="auth-btn" disabled={busy}>
              {busy ? "Saving…" : "Reset password"}
            </button>
            <Link to="/forgot-password">Request a new link</Link>
          </form>
        )}
      </div>
    </AuthShell>
  );
}
