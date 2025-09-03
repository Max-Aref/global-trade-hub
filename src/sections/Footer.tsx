import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Global Trade Hub</h3>
            <p className="text-white/70 text-sm">
              Connecting wholesale suppliers in Egypt with the American market through AI-powered solutions that streamline international trade and drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                "FAQs",
                "Privacy Policy",
                "Terms of Service",
                "Shipping Info",
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-white transition"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaLinkedin, label: "LinkedIn" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-10 w-10 border border-white/15 rounded-lg inline-flex items-center justify-center hover:border-white/40 transition"
                >
                  <Icon className="h-5 w-5 text-white/70 hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © 2025 Global Trade Hub. All rights reserved.
          </p>

          {/* Language Selector */}
          <div className="relative">
            <button className="flex items-center gap-2 py-2 px-3 rounded-lg font-medium text-sm bg-[#190d2e] border border-white/15">
              <span className="text-white/70">EN</span>
              <FiChevronDown className="h-4 w-4 text-white/70" />
            </button>
            <div className="hidden absolute bottom-full mb-2 right-0 bg-[#190d2e] border border-white/15 rounded-lg p-1 w-24">
              {["EN", "ES", "FR"].map((lang) => (
                <button
                  key={lang}
                  className="block w-full text-left px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-[#4a208a] rounded transition"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
