import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";

const SUPPORT_EMAIL = "support@googledoko.com";
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

async function sendInquiryEmail(payload: {
  fullName: string;
  address: string;
  contactNumber: string;
  gmail: string;
  inquiry: string;
}) {
  const body = {
    _subject: `GoogleDoko inquiry from ${payload.fullName}`,
    _template: "table",
    _captcha: "false",
    Name: payload.fullName,
    Address: payload.address,
    "Contact number": payload.contactNumber,
    Gmail: payload.gmail,
    Inquiry: payload.inquiry,
    _replyto: payload.gmail,
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (response.ok) {
      return;
    }
  } catch {
    // Fall through to Gmail compose so the inquiry is still sent.
  }

  const mailBody = [
    `Name: ${payload.fullName}`,
    `Address: ${payload.address}`,
    `Contact number: ${payload.contactNumber}`,
    `Gmail: ${payload.gmail}`,
    "",
    "Inquiry:",
    payload.inquiry,
  ].join("\n");

  window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`GoogleDoko inquiry from ${payload.fullName}`)}&body=${encodeURIComponent(mailBody)}`;
}

function SupportModal({ open, onClose }: SupportModalProps) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

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

  const wordCount = countWords(inquiry);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!fullName.trim() || !address.trim() || !contactNumber.trim() || !gmail.trim() || !inquiry.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail.trim())) {
      setError("Please enter a valid Gmail / email address.");
      return;
    }

    if (wordCount > MAX_INQUIRY_WORDS) {
      setError(`Inquiry can be at most ${MAX_INQUIRY_WORDS} words.`);
      return;
    }

    setSending(true);

    try {
      await sendInquiryEmail({
        fullName: fullName.trim(),
        address: address.trim(),
        contactNumber: contactNumber.trim(),
        gmail: gmail.trim(),
        inquiry: inquiry.trim(),
      });
      setSuccess("Message sent to support@googledoko.com.");
      setFullName("");
      setAddress("");
      setContactNumber("");
      setGmail("");
      setInquiry("");
    } catch {
      setError("Message could not be sent. Please try again.");
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
        <p>Send your inquiry to our support Gmail.</p>

        <form className="support-modal-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              required
            />
          </label>

          <label>
            Address
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Your address"
              required
            />
          </label>

          <label>
            Contact number
            <input
              type="tel"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              placeholder="Your contact number"
              required
            />
          </label>

          <label>
            Gmail
            <input
              type="email"
              value={gmail}
              onChange={(event) => setGmail(event.target.value)}
              placeholder="you@gmail.com"
              required
            />
          </label>

          <label>
            Inquiry
            <textarea
              value={inquiry}
              onChange={(event) => setInquiry(limitWords(event.target.value))}
              placeholder="Write your inquiry"
              rows={5}
              required
            />
            <span className="support-word-count">
              {wordCount}/{MAX_INQUIRY_WORDS} words
            </span>
          </label>

          {error ? <p className="support-modal-error">{error}</p> : null}
          {success ? <p className="support-modal-success">{success}</p> : null}

          <button
            type="submit"
            className="support-send-button"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SupportModal;
