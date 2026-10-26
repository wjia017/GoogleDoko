import type { ReactNode } from "react";
import { X } from "lucide-react";

interface AccountModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

function AccountModal({ open, title, onClose, children }: AccountModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="account-modal-backdrop" onClick={onClose}>
      <div
        className="account-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="account-modal-head">
          <h2 id="account-modal-title">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AccountModal;
