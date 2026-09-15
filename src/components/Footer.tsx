import {
  UserRound,
  Phone,
  CircleHelp,
  MapPin,
  ShieldCheck,
  Lock,
  Undo2,
  Package,
  FileText,
  ShoppingCart,
  ClipboardList,
  Heart,
  Mail,
  Navigation,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-main">

        <div className="footer-container">

          {/* ========================================
              BRAND
          ======================================== */}

          <div className="footer-column footer-brand">

            <div className="footer-logo">
              <div className="footer-logo-icon">
                🌿
              </div>

              <span>GoogleDoko</span>
            </div>

            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur.
              Malesuada duis lorem mi mattis aliquam.
            </p>

            {/* Payment Methods */}
            <div className="payment-methods">

              <span className="payment visa">
                VISA
              </span>

              <span className="payment paypal">
                P
              </span>

              <span className="payment mastercard">
                <span></span>
                <span></span>
              </span>

              <span className="payment gpay">
                <strong>G</strong> Pay
              </span>

            </div>

            {/* Footer Tagline */}
            <div className="footer-tagline">

              <span className="tagline-line"></span>

              <span className="tagline-leaf">
                🌿
              </span>

              <span className="tagline-line"></span>

              <p>
                Fresh. Natural. Delivered with Care.
              </p>

            </div>

          </div>


          {/* ========================================
              SERVICES
          ======================================== */}

          <div className="footer-column">

            <h3>Services</h3>

            <ul className="footer-links">

              <li>
                <UserRound size={21} />
                <span>About our website</span>
              </li>

              <li>
                <Phone size={21} />
                <span>Contact us</span>
              </li>

              <li>
                <CircleHelp size={21} />
                <span>News</span>
              </li>

              <li>
                <MapPin size={21} />
                <span>Store location</span>
              </li>

            </ul>

          </div>


          {/* ========================================
              PRIVACY & TERMS
          ======================================== */}

          <div className="footer-column">

            <h3>Privacy &amp; Terms</h3>

            <ul className="footer-links">

              <li>
                <ShieldCheck size={21} />
                <span>Payment policy</span>
              </li>

              <li>
                <Lock size={21} />
                <span>Privacy policy</span>
              </li>

              <li>
                <Undo2 size={21} />
                <span>Return policy</span>
              </li>

              <li>
                <Package size={21} />
                <span>Shipping policy</span>
              </li>

              <li>
                <FileText size={21} />
                <span>Terms &amp; condition</span>
              </li>

            </ul>

          </div>


          {/* ========================================
              MY ACCOUNT
          ======================================== */}

          <div className="footer-column">

            <h3>My Account</h3>

            <ul className="footer-links">

              <li>
                <UserRound size={21} />
                <span>My account</span>
              </li>

              <li>
                <ShoppingCart size={21} />
                <span>My cart</span>
              </li>

              <li>
                <ClipboardList size={21} />
                <span>Order history</span>
              </li>

              <li>
                <Heart size={21} />
                <span>My wishlist</span>
              </li>

              <li>
                <Navigation size={21} />
                <span>My address</span>
              </li>

            </ul>

          </div>


          {/* ========================================
              LOCATION
          ======================================== */}

          <div className="footer-column footer-location">

            <h3>Location</h3>

            <div className="contact-item">

              <MapPin
                size={25}
                className="contact-icon orange"
              />

              <p>
                Lorem ipsum dolor sit amet
                consectetur. Malesuada duis lorem
                mi mattis aliquam.
              </p>

            </div>

            <div className="contact-item">

              <Phone
                size={23}
                className="contact-icon orange"
              />

              <p>
                +91 111-111-1111
              </p>

            </div>

            <div className="contact-item">

              <Mail
                size={23}
                className="contact-icon orange"
              />

              <p>
                support@.com
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ========================================
          COPYRIGHT
      ======================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026&nbsp; Local Store, All Rights Reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Terms and conditions
            </a>

            <a href="#">
              Privacy Limited
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;