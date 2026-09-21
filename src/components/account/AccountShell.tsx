import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface AccountShellProps {
  title: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
}

function AccountShell({
  title,
  backTo = "/account",
  backLabel = "Back to Account",
  children,
}: AccountShellProps) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="profile-page">
        <div className="profile-page-inner">
          <Link to={backTo} className="account-back">
            {backLabel}
          </Link>
          <h1>{title}</h1>
          <section className="profile-shell">{children}</section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AccountShell;
