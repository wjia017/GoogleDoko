import { useRef } from "react";
import { Camera, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AccountShell from "../../components/account/AccountShell";
import { useAccount } from "../../context/AccountContext";
import { fileToDataUrl } from "../../utils/fileToDataUrl";

const profileSchema = yup.object({
  firstName: yup.string().required("First name is required").trim(),
  lastName: yup.string().required("Last name is required").trim(),
  email: yup.string().required("Email is required").email("Enter a valid email address").trim(),
  phone: yup.string().required("Phone number is required").trim(),
  location: yup.string().default("").trim(),
});

type ProfileFormData = yup.InferType<typeof profileSchema>;

function AccountProfile() {
  const { user, updateUser, setPhoto, showToast } = useAccount();
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    values: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
    },
  });

  function cancel() {
    reset({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
    });
    showToast("Changes discarded");
  }

  async function onSave(data: ProfileFormData) {
    try {
      await updateUser({
        firstName: data.firstName.trim() || user.firstName,
        lastName: data.lastName.trim() || user.lastName,
        email: data.email.trim() || user.email,
        phone: data.phone.trim() || user.phone,
        location: data.location.trim() || user.location,
      });
      showToast("Profile updated successfully");
    } catch (error) {
      showToast(error instanceof Error ? error.message : "Could not save profile");
    }
  }

  async function onPhoto(file?: File | null) {
    if (!file) {
      return;
    }

    try {
      const dataUrl = await fileToDataUrl(file);
      await setPhoto(dataUrl);
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
                void setPhoto("").catch(error => showToast(error.message));
                showToast("Profile photo removed");
              }}
            >
              Remove Photo
            </button>
          ) : null}
        </div>
      </div>

      <form className="account-form" onSubmit={handleSubmit(onSave)} noValidate>
        <div className="account-form-grid">
          <label>
            First Name
            <input {...register("firstName")} style={{ borderColor: errors.firstName ? "#ef4444" : undefined }} />
            {errors.firstName?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.firstName.message}
              </span>
            )}
          </label>
          <label>
            Last Name
            <input {...register("lastName")} style={{ borderColor: errors.lastName ? "#ef4444" : undefined }} />
            {errors.lastName?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.lastName.message}
              </span>
            )}
          </label>
          <label>
            Email
            <input type="email" {...register("email")} style={{ borderColor: errors.email ? "#ef4444" : undefined }} />
            {errors.email?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.email.message}
              </span>
            )}
          </label>
          <label>
            Phone
            <input {...register("phone")} style={{ borderColor: errors.phone ? "#ef4444" : undefined }} />
            {errors.phone?.message && (
              <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                {errors.phone.message}
              </span>
            )}
          </label>
          <label className="account-form-wide">
            Location
            <input {...register("location")} />
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
