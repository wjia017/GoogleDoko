import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../api/client";

const MAX_INQUIRY_WORDS = 500;

interface SupportModalProps {
  open: boolean;
  onClose: () => void;
}

function countWords(value: string) {
  return value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
}

function limitWords(value: string) {
  const words = value.trim().split(/\s+/).filter(Boolean);
  if (words.length <= MAX_INQUIRY_WORDS) {
    return value;
  }
  return words.slice(0, MAX_INQUIRY_WORDS).join(" ");
}

const supportSchema = yup.object({
  fullName: yup.string().required("Please enter your full name").trim(),
  address: yup.string().required("Please enter your address").trim(),
  contactNumber: yup.string().required("Please enter your contact number").trim(),
  gmail: yup
    .string()
    .email("Please enter a valid Gmail / email address")
    .required("Please enter your email address")
    .trim(),
  inquiry: yup
    .string()
    .required("Please enter your inquiry")
    .test("max-words", `Inquiry can be at most ${MAX_INQUIRY_WORDS} words`, (val) =>
      countWords(val || "") <= MAX_INQUIRY_WORDS
    )
    .trim(),
});

type SupportFormData = yup.InferType<typeof supportSchema>;

function SupportModal({ open, onClose }: SupportModalProps) {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<SupportFormData>({
    resolver: yupResolver(supportSchema),
    defaultValues: {
      fullName: "",
      address: "",
      contactNumber: "",
      gmail: "",
      inquiry: "",
    },
  });

  const fullName = watch("fullName");
  const address = watch("address");
  const contactNumber = watch("contactNumber");
  const gmail = watch("gmail");
  const inquiry = watch("inquiry");

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const wordCount = countWords(inquiry || "");

  const onSubmit = async (data: SupportFormData) => {
    setServerError("");
    setSuccess("");
    setSending(true);

    try {
      const result = await api.support({
        fullName: data.fullName.trim(),
        address: data.address.trim(),
        contactNumber: data.contactNumber.trim(),
        gmail: data.gmail.trim(),
        inquiry: data.inquiry.trim(),
      });
      setSuccess(`Your support request #${result.id} has been received.`);
      reset();
    } catch {
      setServerError("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="support-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="support-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="support-modal-close"
          onClick={onClose}
          aria-label="Close support form"
        >
          <X size={18} />
        </button>

        <h2 id="support-modal-title">Contact Support</h2>
        <p>Send your inquiry to our support team.</p>

        <form className="support-modal-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Full name
            <input
              type="text"
              {...register("fullName")}
              value={fullName || ""}
              onChange={(e) => setValue("fullName", e.target.value, { shouldValidate: true })}
              placeholder="Your full name"
            />
            {errors.fullName?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.fullName.message}
              </span>
            )}
          </label>

          <label>
            Address
            <input
              type="text"
              {...register("address")}
              value={address || ""}
              onChange={(e) => setValue("address", e.target.value, { shouldValidate: true })}
              placeholder="Your address"
            />
            {errors.address?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.address.message}
              </span>
            )}
          </label>

          <label>
            Contact number
            <input
              type="tel"
              {...register("contactNumber")}
              value={contactNumber || ""}
              onChange={(e) => setValue("contactNumber", e.target.value, { shouldValidate: true })}
              placeholder="Your phone number"
            />
            {errors.contactNumber?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.contactNumber.message}
              </span>
            )}
          </label>

          <label>
            Gmail
            <input
              type="email"
              {...register("gmail")}
              value={gmail || ""}
              onChange={(e) => setValue("gmail", e.target.value, { shouldValidate: true })}
              placeholder="name@gmail.com"
            />
            {errors.gmail?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.gmail.message}
              </span>
            )}
          </label>

          <label>
            Inquiry (up to {MAX_INQUIRY_WORDS} words)
            <textarea
              rows={4}
              {...register("inquiry")}
              value={inquiry || ""}
              onChange={(event) =>
                setValue("inquiry", limitWords(event.target.value), { shouldValidate: true })
              }
              placeholder="Describe your inquiry..."
            />
            <small style={{ color: wordCount > MAX_INQUIRY_WORDS ? "#ef4444" : "#6f8a7a" }}>
              {wordCount} / {MAX_INQUIRY_WORDS} words
            </small>
            {errors.inquiry?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.inquiry.message}
              </span>
            )}
          </label>

          {serverError && <p className="support-modal-error">{serverError}</p>}
          {success && <p className="support-modal-success">{success}</p>}

          <button
            type="submit"
            className="support-send-button"
            disabled={sending}
          >
            {sending ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SupportModal;
