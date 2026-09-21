import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import CheckoutShell from "../components/CheckoutShell";
import OrderSummaryCard from "../components/OrderSummaryCard";
import { useCheckout, type AddressType } from "../context/CheckoutContext";

const provinces = [
  "Bagmati Province",
  "Koshi Province",
  "Madhesh Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudurpashchim Province",
];

const addressTypes: AddressType[] = ["Home", "Work", "Other"];

function CheckoutDelivery() {
  const navigate = useNavigate();
  const {
    items,
    addresses,
    selectedAddressId,
    form,
    selectAddress,
    startNewAddress,
    updateForm,
    saveCurrentAddress,
  } = useCheckout();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [items.length, navigate]);

  function continueToPayment() {
    if (!saveCurrentAddress()) {
      window.alert(
        "Please fill name, a 10-digit phone number starting with 9, and the address fields.",
      );
      return;
    }

    navigate("/checkout/payment");
  }

  return (
    <CheckoutShell step={1}>
      <div className="checkout-layout">
        <div className="co-main">
          <h1>Select Delivery Address</h1>

          <div className="co-address-grid">
            {addresses.map((address) => (
              <button
                type="button"
                key={address.id}
                className={`co-address-card ${selectedAddressId === address.id ? "selected" : ""}`}
                onClick={() => selectAddress(address.id)}
              >
                <span className="co-address-label">{address.label}</span>
                <strong>{address.title}</strong>
                <p>{address.line}</p>
                <p>Phone: {address.phone}</p>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="co-add-address"
            onClick={startNewAddress}
          >
            <Plus size={16} />
            Add New Address
          </button>

          <section className="co-form-card">
            <h2>Recipient Information</h2>

            <div className="co-form-grid">
              <label>
                Full Name *
                <input
                  value={form.fullName}
                  onChange={(event) => updateForm("fullName", event.target.value)}
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                Phone Number *
                <input
                  value={form.phone}
                  onChange={(event) => updateForm("phone", event.target.value)}
                  placeholder="Enter 10-digit mobile number"
                />
              </label>
              <label>
                Province *
                <select
                  value={form.province}
                  onChange={(event) => updateForm("province", event.target.value)}
                >
                  {provinces.map((province) => (
                    <option key={province}>{province}</option>
                  ))}
                </select>
              </label>
              <label>
                District / City *
                <input
                  value={form.district}
                  onChange={(event) => updateForm("district", event.target.value)}
                  placeholder="Kathmandu"
                />
              </label>
              <label>
                Area *
                <input
                  value={form.area}
                  onChange={(event) => updateForm("area", event.target.value)}
                  placeholder="Budhanilkantha Area"
                />
              </label>
              <label>
                Street Address *
                <input
                  value={form.street}
                  onChange={(event) => updateForm("street", event.target.value)}
                  placeholder="Gairigaon Marg"
                />
              </label>
              <label>
                Landmark (Optional)
                <input
                  value={form.landmark}
                  onChange={(event) => updateForm("landmark", event.target.value)}
                  placeholder="Near Ganesh Mandir"
                />
              </label>
              <label>
                Postal Code
                <input
                  value={form.postalCode}
                  onChange={(event) => updateForm("postalCode", event.target.value)}
                  placeholder="44600"
                />
              </label>
            </div>

            <p className="co-type-label">Address Type</p>
            <div className="co-type-row">
              {addressTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`co-type-chip ${form.addressType === type ? "active" : ""}`}
                  onClick={() => updateForm("addressType", type)}
                >
                  {type === "Home"
                    ? "Home Address"
                    : type === "Work"
                      ? "Work Address"
                      : "Other Address"}
                </button>
              ))}
            </div>
          </section>
        </div>

        <OrderSummaryCard
          items={items}
          actionLabel="Continue to Payment"
          onAction={continueToPayment}
        />
      </div>
    </CheckoutShell>
  );
}

export default CheckoutDelivery;
