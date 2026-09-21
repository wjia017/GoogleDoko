import { useState, type FormEvent } from "react";

import AccountModal from "../../components/account/AccountModal";
import AccountShell from "../../components/account/AccountShell";
import { useAccount } from "../../context/AccountContext";
import type { MockAddress } from "../../data/mockAddresses";

const emptyAddress: Omit<MockAddress, "id"> = {
  label: "Home",
  fullName: "",
  phone: "",
  province: "",
  city: "",
  area: "",
  street: "",
  postalCode: "",
  isDefault: false,
};

function AccountAddresses() {
  const {
    addresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
  } = useAccount();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState(emptyAddress);

  function openAdd() {
    setEditingId(null);
    setDraft(emptyAddress);
    setOpen(true);
  }

  function openEdit(address: MockAddress) {
    const { id, ...rest } = address;
    setEditingId(id);
    setDraft(rest);
    setOpen(true);
  }

  function save(event: FormEvent) {
    event.preventDefault();
    if (!draft.fullName.trim() || !draft.phone.trim() || !draft.city.trim()) {
      return;
    }
    if (editingId) {
      updateAddress(editingId, draft);
    } else {
      addAddress(draft);
    }
    setOpen(false);
  }

  return (
    <AccountShell title="Addresses">
      <div className="account-form-actions">
        <button type="button" className="account-btn" onClick={openAdd}>
          Add Address
        </button>
      </div>

      <div className="account-address-list">
        {addresses.map((address) => (
          <article key={address.id} className="account-address-card">
            <div>
              <h3>
                {address.label}
                {address.isDefault ? <em>Default</em> : null}
              </h3>
              <p>{address.fullName}</p>
              <p>{address.phone}</p>
              <p>
                {address.street}, {address.area}, {address.city}, {address.province}{" "}
                {address.postalCode}
              </p>
            </div>
            <div className="account-form-actions">
              {!address.isDefault ? (
                <button
                  type="button"
                  className="account-btn ghost"
                  onClick={() => setDefaultAddress(address.id)}
                >
                  Set as Default
                </button>
              ) : null}
              <button type="button" className="account-btn ghost" onClick={() => openEdit(address)}>
                Edit
              </button>
              <button
                type="button"
                className="account-btn ghost danger"
                onClick={() => {
                  if (window.confirm("Delete this address?")) {
                    deleteAddress(address.id);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>

      <AccountModal
        open={open}
        title={editingId ? "Edit Address" : "Add Address"}
        onClose={() => setOpen(false)}
      >
        <form className="account-form" onSubmit={save}>
          {(
            [
              ["label", "Label"],
              ["fullName", "Full Name"],
              ["phone", "Phone"],
              ["province", "Province"],
              ["city", "City"],
              ["area", "Area"],
              ["street", "Street Address"],
              ["postalCode", "Postal Code"],
            ] as const
          ).map(([key, label]) => (
            <label key={key}>
              {label}
              <input
                value={draft[key]}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, [key]: event.target.value }))
                }
              />
            </label>
          ))}
          <label className="account-check">
            <input
              type="checkbox"
              checked={draft.isDefault}
              onChange={(event) =>
                setDraft((current) => ({ ...current, isDefault: event.target.checked }))
              }
            />
            Set as default
          </label>
          <div className="account-form-actions">
            <button type="submit" className="account-btn">
              Save
            </button>
            <button type="button" className="account-btn ghost" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </AccountModal>
    </AccountShell>
  );
}

export default AccountAddresses;
