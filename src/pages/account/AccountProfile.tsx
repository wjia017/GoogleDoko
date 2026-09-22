import { useRef, useState, type FormEvent } from "react";
import { Camera, UserRound } from "lucide-react";

import AccountShell from "../../components/account/AccountShell";
import { useAccount } from "../../context/AccountContext";

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function fileToDataUrl(file: File) {
  const original = await readFileAsDataUrl(file);

  return new Promise<string>((resolve) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const max = 480;
      const scale = Math.min(1, max / Math.max(image.width, image.height));
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        resolve(original);
        return;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    image.onerror = () => resolve(original);
    image.src = original;
  });
}

function AccountProfile() {
  const { user, updateUser, setPhoto, showToast } = useAccount();
  const fileRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    location: user.location,
  });

  function cancel() {
    setDraft({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
    });
    showToast("Changes discarded");
  }

  function save(event: FormEvent) {
    event.preventDefault();
    updateUser({
      firstName: draft.firstName.trim() || user.firstName,
      lastName: draft.lastName.trim() || user.lastName,
      email: draft.email.trim() || user.email,
      phone: draft.phone.trim() || user.phone,
      location: draft.location.trim() || user.location,
    });
    showToast("Profile updated successfully");
  }

  async function onPhoto(file?: File | null) {
    if (!file) {
      return;
    }

    try {
      const dataUrl = await fileToDataUrl(file);
      setPhoto(dataUrl);
      showToast("Profile photo updated");
    } catch {
      showToast("Could not upload that photo");
    }

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }

  return (
    <AccountShell title="Personal Information">
      <div className="account-profile-photo">
        <button
          type="button"
          className="profile-avatar account-avatar-button"
          onClick={() => fileRef.current?.click()}
          aria-label="Upload profile photo"
          style={
            user.photo
              ? {
                  backgroundImage: `url(${user.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {user.photo ? null : <UserRound size={48} strokeWidth={1.6} />}
          <span className="account-avatar-camera">
            <Camera size={16} />
          </span>
        </button>
        <div className="account-form-actions">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="account-file-input"
            onChange={(event) => onPhoto(event.target.files?.[0])}
          />
          <button
            type="button"
            className="account-btn"
            onClick={() => fileRef.current?.click()}
          >
            {user.photo ? "Change Photo" : "Upload Photo"}
          </button>
          {user.photo ? (
            <button
              type="button"
              className="account-btn ghost"
              onClick={() => {
                setPhoto("");
                showToast("Profile photo removed");
              }}
            >
              Remove Photo
            </button>
          ) : null}
        </div>
      </div>

      <form className="account-form" onSubmit={save}>
        <div className="account-form-grid">
          <label>
            First Name
            <input
              value={draft.firstName}
              onChange={(event) =>
                setDraft((current) => ({ ...current, firstName: event.target.value }))
              }
            />
          </label>
          <label>
            Last Name
            <input
              value={draft.lastName}
              onChange={(event) =>
                setDraft((current) => ({ ...current, lastName: event.target.value }))
              }
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={draft.email}
              onChange={(event) =>
                setDraft((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label>
            Phone
            <input
              value={draft.phone}
              onChange={(event) =>
                setDraft((current) => ({ ...current, phone: event.target.value }))
              }
            />
          </label>
          <label className="account-form-wide">
            Location
            <input
              value={draft.location}
              onChange={(event) =>
                setDraft((current) => ({ ...current, location: event.target.value }))
              }
            />
          </label>
        </div>

        <div className="account-form-actions">
          <button type="submit" className="account-btn">
            Save Changes
          </button>
          <button type="button" className="account-btn ghost" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </AccountShell>
  );
}

export default AccountProfile;
