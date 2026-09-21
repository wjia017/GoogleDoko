import { useState, type FormEvent } from "react";

import AccountModal from "./account/AccountModal";
import { useAccount } from "../context/AccountContext";

interface AccountSettingsModalsProps {
  passwordOpen: boolean;
  notificationsOpen: boolean;
  languageOpen: boolean;
  inviteOpen: boolean;
  onClose: () => void;
}

function AccountSettingsModals({
  passwordOpen,
  notificationsOpen,
  languageOpen,
  inviteOpen,
  onClose,
}: AccountSettingsModalsProps) {
  const {
    user,
    notifications,
    language,
    changePassword,
    saveNotifications,
    setLanguage,
    showToast,
  } = useAccount();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function submitPassword(event: FormEvent) {
    event.preventDefault();
    if (!current.trim()) {
      setError("Current password is required");
      return;
    }
    if (!next.trim()) {
      setError("New password is required");
      return;
    }
    if (next.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }
    if (next !== confirm) {
      setError("Confirm password must match");
      return;
    }
    const result = changePassword(current, next);
    if (result) {
      setError(result);
      return;
    }
    setCurrent("");
    setNext("");
    setConfirm("");
    setError("");
    onClose();
  }

  async function copyCode() {
    await navigator.clipboard.writeText(user.referralCode);
    showToast("Referral code copied!");
  }

  return (
    <>
      <AccountModal open={passwordOpen} title="Change Password" onClose={onClose}>
        <form className="account-form" onSubmit={submitPassword}>
          <label>
            Current Password
            <input
              type="password"
              value={current}
              onChange={(event) => setCurrent(event.target.value)}
            />
          </label>
          <label>
            New Password
            <input
              type="password"
              value={next}
              onChange={(event) => setNext(event.target.value)}
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
            />
          </label>
          {error ? <p className="account-form-error">{error}</p> : null}
          <p className="account-login-note">
            Demo only. This does not change a real account password on a server.
          </p>
          <button type="submit" className="account-btn">
            Update Password
          </button>
        </form>
      </AccountModal>

      <AccountModal
        open={notificationsOpen}
        title="Notification Settings"
        onClose={onClose}
      >
        <div className="account-switch-list">
          {(
            [
              ["orderUpdates", "Order Updates"],
              ["deliveryUpdates", "Delivery Updates"],
              ["promotionalOffers", "Promotional Offers"],
              ["emailNotifications", "Email Notifications"],
              ["pushNotifications", "Push Notifications"],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="account-switch">
              <span>{label}</span>
              <input
                type="checkbox"
                checked={notifications[key]}
                onChange={(event) => {
                  const nextValue = {
                    ...notifications,
                    [key]: event.target.checked,
                  };
                  saveNotifications(nextValue);
                  showToast("Notification settings saved");
                }}
              />
            </label>
          ))}
        </div>
      </AccountModal>

      <AccountModal open={languageOpen} title="Language" onClose={onClose}>
        <div className="account-form">
          {(["English", "Nepali"] as const).map((option) => (
            <button
              key={option}
              type="button"
              className={
                language === option ? "account-chip active" : "account-chip"
              }
              onClick={() => {
                setLanguage(option);
                showToast(`Language set to ${option}`);
                onClose();
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </AccountModal>

      <AccountModal open={inviteOpen} title="Invite Friends" onClose={onClose}>
        <p>Your Referral Code:</p>
        <p className="account-referral">{user.referralCode}</p>
        <div className="account-form-actions">
          <button type="button" className="account-btn" onClick={copyCode}>
            Copy Code
          </button>
          <button
            type="button"
            className="account-btn ghost"
            onClick={async () => {
              const shareText = `Join GoogleDoko with my code ${user.referralCode}`;
              if (navigator.share) {
                await navigator.share({ text: shareText });
              } else {
                await navigator.clipboard.writeText(shareText);
                showToast("Referral code copied!");
              }
            }}
          >
            Share
          </button>
        </div>
      </AccountModal>
    </>
  );
}

export default AccountSettingsModals;
