import React from "react";
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import ScrollToTop from "../lib/ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <ScrollToTop />
      {/* Top Navigation */}
      <Header />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
};

export default Layout;
