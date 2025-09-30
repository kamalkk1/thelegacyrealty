import React from "react";
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import ScrollToTop from "../lib/ScrollToTop";
import backgroundImg from "../assets/layoutbg.webp"; // Add this import
import CTAPopup from "../components/CTAPopup";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      />
      <ScrollToTop />
      {/* Top Navigation */}
      <Header />
        {/* CTA Popup */}
      <CTAPopup />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
};

export default Layout;
