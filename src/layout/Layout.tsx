import React from "react";
import Header from "../components/Header";
import ContactFooter from "../components/ContactFooter";
import ScrollToTop from "../lib/ScrollToTop";
import backgroundImg from "../assets/layoutbg.webp";
import CTAPopup from "../components/CTAPopup";
import { MessageCircle } from "lucide-react"; // WhatsApp icon

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


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919695798957" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 sm:bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Layout;
