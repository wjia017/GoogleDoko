import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const steps = [
  { id: 1, label: "Delivery", path: "/checkout" },
  { id: 2, label: "Payment", path: "/checkout/payment" },
  { id: 3, label: "Review", path: "/checkout/review" },
  { id: 4, label: "Confirmation", path: "/checkout/confirmation" },
];

interface CheckoutShellProps {
  step: 1 | 2 | 3 | 4;
  children: ReactNode;
}

function CheckoutShell({ step, children }: CheckoutShellProps) {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="checkout-page">
        <div className="checkout-wrap">
          <ol className="checkout-stepper">
            {steps.map((item, index) => {
              const complete = step > item.id;
              const current = step === item.id;

              return (
                <li
                  key={item.id}
                  className={`checkout-step ${complete ? "complete" : ""} ${current ? "current" : ""}`}
                >
                  {index > 0 && <span className="checkout-step-line" />}
                  {complete && item.id < 4 ? (
                    <Link to={item.path} className="checkout-step-dot">
                      <Check size={14} />
                    </Link>
                  ) : (
                    <span className="checkout-step-dot">{item.id}</span>
                  )}
                  <span className="checkout-step-label">{item.label}</span>
                </li>
              );
            })}
          </ol>

          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default CheckoutShell;
