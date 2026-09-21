import { useRef, useState, type FormEvent } from "react";

import AccountShell from "../../components/account/AccountShell";
import { useAccount } from "../../context/AccountContext";

async function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const max = 480;
      const scale = Math.min(1, max / Math.max(image.width, image.height));
      canvas.width = Math.max(1, image.width * scale);
      canvas.height = Math.max(1, image.height * scale);
      canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
      URL.revokeObjectURL(url);
    };
    image.onerror = reject;
    image.src = url;
  });
}

function AccountProfile() {
  const { user, updateUser, setPhoto, showToast } = useAccount();
  const fileRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(user);

  function startEdit() {
    setDraft(user);
    setEditing(true);
  }

  function cancel() {
    setDraft(user);
    setEditing(false);
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
    setEditing(false);
    showToast("Profile updated successfully");
  }

  async function onPhoto(file?: File) {
    if (!file) {
      return;
    }
    const dataUrl = await fileToDataUrl(file);
    setPhoto(dataUrl);
    showToast("Profile photo updated");
  }

  const source = editing ? draft : user;

  return (
    <AccountShell title="Personal Information">
      <div className="account-profile-photo">
        <div
          className="profile-avatar"
          style={
            user.photo
              ? {
                  backgroundImage: `url(${user.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
        <div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
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
              value={source.firstName}
              disabled={!editing}
              onChange={(event) =>
                setDraft((current) => ({ ...current, firstName: event.target.value }))
              }
            />
          </label>
          <label>
            Last Name
            <input
              value={source.lastName}
              disabled={!editing}
              onChange={(event) =>
                setDraft((current) => ({ ...current, lastName: event.target.value }))
              }
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={source.email}
              disabled={!editing}
              onChange={(event) =>
                setDraft((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label>
            Phone
            <input
              value={source.phone}
              disabled={!editing}
              onChange={(event) =>
                setDraft((current) => ({ ...current, phone: event.target.value }))
              }
            />
          </label>
          <label className="account-form-wide">
            Location
            <input
              value={source.location}
              disabled={!editing}
              onChange={(event) =>
                setDraft((current) => ({ ...current, location: event.target.value }))
              }
            />
          </label>
        </div>

        <div className="account-form-actions">
          {editing ? (
            <>
              <button type="submit" className="account-btn">
                Save Changes
              </button>
              <button type="button" className="account-btn ghost" onClick={cancel}>
                Cancel
              </button>
            </>
          ) : (
            <button type="button" className="account-btn" onClick={startEdit}>
              Edit
            </button>
          )}
        </div>
      </form>
    </AccountShell>
  );
}

export default AccountProfile;
