import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='bg-black pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* About Column */}
          <div>
            <Link href='/' className='flex items-center gap-2 mb-4 group'>
              <div className='h-10 w-10 rounded-lg inline-flex justify-center border border-[#2A2A2A] group-hover:border-[#8c45ff]/40 transition-colors duration-300 p-2 items-center'>
                <LiaGlobeAmericasSolid className='h-8 w-8 text-[#8c45ff]' />
              </div>
              <h3 className='text-white text-lg font-medium group-hover:text-[#8c45ff] transition-colors duration-300'>
                Global Trade Hub
              </h3>
            </Link>
            <p className='text-white/70 text-sm'>
              Connecting wholesale suppliers in Egypt with the American market
              through AI-powered solutions that streamline international trade
              and drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white text-lg font-medium mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-white/70 text-sm hover:text-white transition'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='text-white text-lg font-medium mb-4'>Resources</h3>
            <ul className='space-y-2'>
              {[
                "FAQs",
                "Privacy Policy",
                "Terms of Service",
                "Shipping Info",
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href='#'
                    className='text-white/70 text-sm hover:text-white transition'
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className='text-white text-lg font-medium mb-4'>
              Connect With Us
            </h3>
            {/* Social media icons with their official brand colors and consistent gray hover effect */}
            <div className='flex space-x-4'>
              {[
                {
                  Icon: FaLinkedin,
                  label: "LinkedIn",
                  brandColor: "#0A66C2", // LinkedIn official blue
                },
                {
                  Icon: FaXTwitter,
                  label: "X",
                  brandColor: "#645b5b", // X (Twitter) black
                },
                {
                  Icon: FaFacebook,
                  label: "Facebook",
                  brandColor: "#1877F2", // Facebook official blue
                },
                {
                  Icon: FaInstagram,
                  label: "Instagram",
                  brandColor: "#E1306C", // Instagram pink (fallback for gradient)
                  isGradient: true,
                },
                {
                  Icon: FaYoutube,
                  label: "YouTube",
                  brandColor: "#FF0000", // YouTube red
                },
                {
                  Icon: FaWhatsapp,
                  label: "WhatsApp",
                  brandColor: "#25D366", // WhatsApp green
                },
              ].map(({ Icon, label, brandColor, isGradient }) => (
                <a
                  key={label}
                  href='#'
                  aria-label={`Visit our ${label} page`}
                  className='h-10 w-10 border border-white/15 rounded-lg inline-flex items-center justify-center hover:border-white/40 transition group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
                >
                  {isGradient ? (
                    // Special case for Instagram with gradient background
                    <div className='relative w-5 h-5 flex items-center justify-center'>
                      <div className='absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#E1306C] to-[#833AB4] opacity-0 group-hover:opacity-0 transition-opacity duration-300'></div>
                      <Icon
                        className='h-5 w-5 text-[#E1306C] group-hover:text-gray-500 transition-colors duration-300'
                        aria-hidden='true'
                      />
                    </div>
                  ) : (
                    // All other social icons with their brand colors
                    <Icon
                      className={`h-5 w-5 text-[${brandColor}] group-hover:text-gray-500 transition-colors duration-300`}
                      style={{ color: brandColor }} // Fallback for dynamic Tailwind classes
                      aria-hidden='true'
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/15 my-8'></div>

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-white/70 text-sm mb-4 md:mb-0'>
            © 2025 Global Trade Hub. All rights reserved.
          </p>

          {/* Language Selector */}
          <div className='relative'>
            <button className='flex items-center gap-2 py-2 px-3 rounded-lg font-medium text-sm bg-[#190d2e] border border-white/15'>
              <span className='text-white/70'>EN</span>
              <FiChevronDown className='h-4 w-4 text-white/70' />
            </button>
            <div className='hidden absolute bottom-full mb-2 right-0 bg-[#190d2e] border border-white/15 rounded-lg p-1 w-24'>
              {["EN", "ES", "FR"].map((lang) => (
                <button
                  key={lang}
                  className='block w-full text-left px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-[#4a208a] rounded transition'
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
