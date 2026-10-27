import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../api/client";

const newsletterSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email address is required")
    .trim(),
});

type NewsletterFormData = yup.InferType<typeof newsletterSchema>;

function Newsletter() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: NewsletterFormData) {
    if (busy) return;
    setBusy(true);
    setMessage("");
    try {
      await api.subscribe(data.email);
      setMessage("You’re subscribed. Thank you!");
      reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again");
    } finally {
      setBusy(false);
    }
  }

  const feedback = errors.email?.message || message;
  const isError = Boolean(errors.email?.message);

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>Get the latest deals</h2>
        <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            aria-label="Email address"
            {...register("email")}
          />
          <button type="submit" disabled={busy}>
            {busy ? "Subscribing…" : "Subscribe"}
          </button>
          {feedback && (
            <span
              className={`newsletter-feedback ${isError ? "error" : "success"}`}
              role="status"
            >
              {feedback}
            </span>
          )}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
