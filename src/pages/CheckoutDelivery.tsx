import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const deliverySchema = yup.object({
  fullName: yup.string().required("Enter recipient's full name").trim(),
  phone: yup
    .string()
    .required("Enter 10-digit mobile number")
    .test(
      "is-nepal-phone",
      "Enter a valid 10-digit mobile number starting with 9",
      (val) => /^9\d{9}$/.test((val || "").replace(/\D/g, ""))
    ),
  province: yup.string().required("Select province"),
  district: yup.string().required("Enter district / city").trim(),
  area: yup.string().required("Enter area / neighborhood").trim(),
  street: yup.string().required("Enter street address").trim(),
  landmark: yup.string().default("").trim(),
  postalCode: yup.string().default("").trim(),
  addressType: yup.string().oneOf(["Home", "Work", "Other"]).default("Home"),
});

type DeliveryFormData = yup.InferType<typeof deliverySchema>;

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

  const {
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<DeliveryFormData>({
    resolver: yupResolver(deliverySchema),
    values: {
      fullName: form.fullName,
      phone: form.phone,
      province: form.province,
      district: form.district,
      area: form.area,
      street: form.street,
      landmark: form.landmark,
      postalCode: form.postalCode,
      addressType: form.addressType,
    },
  });

  const values = watch();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [items.length, navigate]);

  async function continueToPayment() {
    const isValid = await trigger();
    if (!isValid) {
      const firstError = document.querySelector(".co-form-grid span[style*='ef4444'], .co-form-grid input[style*='ef4444']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!saveCurrentAddress()) {
      return;
    }

    navigate("/checkout/payment");
  }

  const handleFieldChange = (key: keyof DeliveryFormData, value: any) => {
    setValue(key, value, { shouldValidate: true });
    updateForm(key as any, value);
  };

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

            <form onSubmit={handleSubmit(continueToPayment)} className="co-form-grid" noValidate>
              <label>
                Full Name *
                <input
                  value={values.fullName || ""}
                  style={{ borderColor: errors.fullName ? "#ef4444" : undefined }}
                  onChange={(event) => handleFieldChange("fullName", event.target.value)}
                  placeholder="Enter your full name"
                />
                {errors.fullName?.message && (
                  <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                    {errors.fullName.message}
                  </span>
                )}
              </label>
              <label>
                Phone Number *
                <input
                  value={values.phone || ""}
                  style={{ borderColor: errors.phone ? "#ef4444" : undefined }}
                  onChange={(event) => handleFieldChange("phone", event.target.value)}
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.phone?.message && (
                  <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                    {errors.phone.message}
                  </span>
                )}
              </label>
              <label>
                Province *
                <select
                  value={values.province || provinces[0]}
                  style={{ borderColor: errors.province ? "#ef4444" : undefined }}
                  onChange={(event) => handleFieldChange("province", event.target.value)}
                >
                  {provinces.map((province) => (
                    <option key={province}>{province}</option>
                  ))}
                </select>
                {errors.province?.message && (
                  <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                    {errors.province.message}
                  </span>
                )}
              </label>
              <label>
                District / City *
                <input
                  value={values.district || ""}
                  style={{ borderColor: errors.district ? "#ef4444" : undefined }}
                  onChange={(event) => handleFieldChange("district", event.target.value)}
                  placeholder="Kathmandu"
                />
                {errors.district?.message && (
                  <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                    {errors.district.message}
                  </span>
                )}
              </label>
              <label>
                Area *
                <input
                  value={values.area || ""}
                  style={{ borderColor: errors.area ? "#ef4444" : undefined }}
                  onChange={(event) => handleFieldChange("area", event.target.value)}
                  placeholder="Budhanilkantha Area"
                />
                {errors.area?.message && (
                  <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                    {errors.area.message}
                  </span>
                )}
              </label>
              <label>
                Street Address *
                <input
                  value={values.street || ""}
                  style={{ borderColor: errors.street ? "#ef4444" : undefined }}
                  onChange={(event) => handleFieldChange("street", event.target.value)}
                  placeholder="Gairigaon Marg"
                />
                {errors.street?.message && (
                  <span style={{ color: "#ef4444", fontSize: 11, display: "block" }}>
                    {errors.street.message}
                  </span>
                )}
              </label>
              <label>
                Landmark (Optional)
                <input
                  value={values.landmark || ""}
                  onChange={(event) => handleFieldChange("landmark", event.target.value)}
                  placeholder="Near Ganesh Mandir"
                />
              </label>
              <label>
                Postal Code
                <input
                  value={values.postalCode || ""}
                  onChange={(event) => handleFieldChange("postalCode", event.target.value)}
                  placeholder="44600"
                />
              </label>
            </form>

            <p className="co-type-label">Address Type</p>
            <div className="co-type-row">
              {addressTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`co-type-chip ${values.addressType === type ? "active" : ""}`}
                  onClick={() => handleFieldChange("addressType", type)}
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
