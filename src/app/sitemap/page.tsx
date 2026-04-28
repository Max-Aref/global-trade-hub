"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaUserPlus,
  FaBuilding,
  FaBox,
  FaFileAlt,
  FaShieldAlt,
  FaQuestionCircle,
  FaTruck,
  FaArrowLeft,
} from "react-icons/fa";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <FaHome className='text-2xl' />,
      links: [
        { name: "Home", href: "/", description: "Landing page and overview" },
        {
          name: "About Us",
          href: "/about",
          description: "Learn about Global Trade Hub",
        },
      ],
    },
    {
      title: "Authentication",
      icon: <FaUserPlus className='text-2xl' />,
      links: [
        {
          name: "Sign Up / Login",
          href: "/auth",
          description: "Create account or sign in",
        },
      ],
    },
    {
      title: "Company Management",
      icon: <FaBuilding className='text-2xl' />,
      links: [
        {
          name: "Company Profile",
          href: "/CompanyProfile",
          description: "Manage your company profile and settings",
        },
        {
          name: "Company Registration",
          href: "/CompanyRegisteration",
          description: "Register your company on the platform",
        },
      ],
    },
    {
      title: "Product Management",
      icon: <FaBox className='text-2xl' />,
      links: [
        {
          name: "Add Product",
          href: "/CompanyProfile/add-product",
          description: "Add new products to your catalog",
        },
      ],
    },
    {
      title: "Legal & Support",
      icon: <FaFileAlt className='text-2xl' />,
      links: [
        {
          name: "Privacy Policy",
          href: "#",
          description: "Our privacy and data protection policy",
        },
        {
          name: "Terms of Service",
          href: "#",
          description: "Terms and conditions of use",
        },
        {
          name: "Shipping Information",
          href: "#",
          description: "Shipping policies and guidelines",
        },
      ],
    },
    {
      title: "Help & Resources",
      icon: <FaQuestionCircle className='text-2xl' />,
      links: [
        {
          name: "FAQs",
          href: "#",
          description: "Frequently asked questions",
        },
        {
          name: "Sitemap",
          href: "/sitemap",
          description: "Complete site structure (current page)",
        },
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-3 group'>
              <div className='h-12 w-12 rounded-lg border border-[#2A2A2A] flex items-center justify-center hover:border-[#8c45ff]/40 transition-colors duration-300'>
                <LiaGlobeAmericasSolid className='h-8 w-8 text-white' />
              </div>
              <span className='text-xl font-bold'>Global Trade Hub</span>
            </Link>
            <Link href='/'>
              <button className='px-6 py-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 font-medium flex items-center gap-2'>
                <FaArrowLeft />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.08)_15%,transparent_78%)]'></div>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center max-w-4xl mx-auto'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6'
            >
              <FaFileAlt className='text-[#8c45ff]' />
              <span className='text-sm font-medium'>Site Navigation</span>
            </motion.div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6'>
              Site
              <span className='bg-gradient-to-r from-[#8c45ff] to-[#b665ff] bg-clip-text text-transparent'>
                {" "}
                Map
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-white/70 leading-relaxed'>
              Complete overview of all pages and resources available on Global
              Trade Hub
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-72 h-72 bg-[#8c45ff]/10 rounded-full blur-[120px] pointer-events-none'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-[#b665ff]/10 rounded-full blur-[120px] pointer-events-none'></div>
      </section>

      {/* Sitemap Grid */}
      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className='p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#8c45ff]/30 transition-all duration-300'
              >
                {/* Section Header */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#8c45ff]/20 to-[#b665ff]/20 border border-[#8c45ff]/30 flex items-center justify-center text-[#8c45ff]'>
                    {section.icon}
                  </div>
                  <h2 className='text-2xl font-bold'>{section.title}</h2>
                </div>

                {/* Links List */}
                <ul className='space-y-4'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className='block p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#8c45ff]/30 hover:bg-white/[0.05] transition-all duration-300 group'
                      >
                        <div className='flex items-start justify-between gap-2'>
                          <div className='flex-1'>
                            <h3 className='text-lg font-semibold text-white group-hover:text-[#8c45ff] transition-colors duration-300 mb-1'>
                              {link.name}
                            </h3>
                            <p className='text-sm text-white/60'>
                              {link.description}
                            </p>
                          </div>
                          <svg
                            className='w-5 h-5 text-white/40 group-hover:text-[#8c45ff] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 5l7 7-7 7'
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-16 max-w-4xl mx-auto'
          >
            <div className='p-8 rounded-2xl bg-gradient-to-br from-[#8c45ff]/10 to-transparent border border-[#8c45ff]/20'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
                <div>
                  <div className='text-3xl font-bold text-[#8c45ff] mb-2'>
                    {sitemapSections.reduce(
                      (acc, section) => acc + section.links.length,
                      0
                    )}
                  </div>
                  <div className='text-sm text-white/60'>Total Pages</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#8c45ff] mb-2'>
                    {sitemapSections.length}
                  </div>
                  <div className='text-sm text-white/60'>Categories</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#8c45ff] mb-2'>
                    24/7
                  </div>
                  <div className='text-sm text-white/60'>Availability</div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-[#8c45ff] mb-2'>
                    100%
                  </div>
                  <div className='text-sm text-white/60'>Accessible</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='mt-12 text-center'
          >
            <p className='text-white/60 mb-4'>
              Can&apos;t find what you&apos;re looking for?
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link href='/auth'>
                <button className='px-6 py-3 rounded-lg bg-gradient-to-r from-[#8c45ff] to-[#b665ff] hover:opacity-90 transition-opacity font-medium'>
                  Get Started
                </button>
              </Link>
              <Link href='/about'>
                <button className='px-6 py-3 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 font-medium'>
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10 py-8'>
        <div className='container mx-auto px-4'>
          <div className='text-center text-white/60 text-sm'>
            <p>© 2025 Global Trade Hub. All rights reserved.</p>
            <p className='mt-2'>
              Last updated: October 2, 2025 • All pages are accessible and
              secure
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
