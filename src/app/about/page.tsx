"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGlobe,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

export default function AboutPage() {
  const values = [
    {
      icon: <FaShieldAlt className='text-3xl' />,
      title: "Trust & Security",
      description:
        "Every business on our platform is verified. We ensure secure transactions and protect your data with enterprise-grade encryption.",
    },
    {
      icon: <FaGlobe className='text-3xl' />,
      title: "Global Reach",
      description:
        "Connect with buyers and suppliers across 150+ countries. Break geographical barriers and expand your market presence worldwide.",
    },
    {
      icon: <FaUsers className='text-3xl' />,
      title: "Community First",
      description:
        "Join a thriving community of exporters, importers, and manufacturers. Share knowledge, build relationships, and grow together.",
    },
    {
      icon: <FaChartLine className='text-3xl' />,
      title: "Growth Focused",
      description:
        "Access powerful analytics, market insights, and tools designed to help your business scale efficiently and profitably.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description:
        "Global Trade Hub was born with a vision to democratize international trade.",
    },
    {
      year: "2021",
      title: "1,000 Users",
      description:
        "Reached our first thousand verified businesses on the platform.",
    },
    {
      year: "2023",
      title: "50 Countries",
      description:
        "Expanded to 50 countries, connecting businesses across continents.",
    },
    {
      year: "2025",
      title: "150+ Countries",
      description:
        "Now serving 150+ countries with 7,500+ active businesses worldwide.",
    },
  ];

  const stats = [
    { value: "7,500+", label: "Active Businesses" },
    { value: "150+", label: "Countries" },
    { value: "$2B+", label: "Trade Volume" },
    { value: "98%", label: "Success Rate" },
  ];

  const team = [
    {
      name: "Innovation",
      description: "Cutting-edge technology to simplify global trade",
      icon: <FaRocket className='text-4xl' />,
    },
    {
      name: "Partnership",
      description: "Building lasting relationships between businesses",
      icon: <FaHandshake className='text-4xl' />,
    },
    {
      name: "Excellence",
      description: "Committed to delivering exceptional service",
      icon: <FaCheckCircle className='text-4xl' />,
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
            <Link href='/auth'>
              <button className='px-6 py-2 rounded-lg bg-gradient-to-r from-[#8c45ff] to-[#b665ff] hover:opacity-90 transition-opacity font-medium'>
                Get Started
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
              <FaGlobe className='text-[#8c45ff]' />
              <span className='text-sm font-medium'>About Us</span>
            </motion.div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6'>
              Connecting Businesses
              <span className='bg-gradient-to-r from-[#8c45ff] to-[#b665ff] bg-clip-text text-transparent'>
                {" "}
                Worldwide
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-white/70 leading-relaxed mb-8'>
              We&apos;re building the future of international trade, making it
              accessible, secure, and profitable for businesses of all sizes.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className='p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#8c45ff]/30 transition-colors duration-300'
                >
                  <div className='text-3xl md:text-4xl font-bold text-[#8c45ff] mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-white/60'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-72 h-72 bg-[#8c45ff]/10 rounded-full blur-[120px] pointer-events-none'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-[#b665ff]/10 rounded-full blur-[120px] pointer-events-none'></div>
      </section>

      {/* Mission Section */}
      <section className='py-20 md:py-28 relative'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6'>
              Our Mission
            </h2>
            <p className='text-xl text-white/70 leading-relaxed'>
              To empower businesses worldwide by providing a trusted,
              transparent, and efficient platform for international trade. We
              believe every business deserves access to global opportunities,
              regardless of size or location.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#8c45ff]/30 transition-all duration-300 group hover:scale-105'
              >
                <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-[#8c45ff]/20 to-[#b665ff]/20 border border-[#8c45ff]/30 flex items-center justify-center mb-6 text-[#8c45ff] group-hover:scale-110 transition-transform duration-300'>
                  {value.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4'>{value.title}</h3>
                <p className='text-white/70 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className='py-20 md:py-28 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0514] to-transparent'></div>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6'>
              Our Journey
            </h2>
            <p className='text-xl text-white/70 max-w-2xl mx-auto'>
              From a small startup to a global platform connecting thousands of
              businesses
            </p>
          </motion.div>

          {/* Timeline */}
          <div className='max-w-4xl mx-auto'>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative flex items-center gap-8 mb-12 last:mb-0'
              >
                {/* Timeline line */}
                {index < milestones.length - 1 && (
                  <div className='absolute left-16 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#8c45ff] to-transparent'></div>
                )}

                {/* Year badge */}
                <div className='flex-shrink-0 w-32'>
                  <div className='px-4 py-2 rounded-full bg-gradient-to-r from-[#8c45ff] to-[#b665ff] text-center font-bold'>
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#8c45ff]/30 transition-colors duration-300'>
                  <h3 className='text-2xl font-bold mb-2'>{milestone.title}</h3>
                  <p className='text-white/70'>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className='py-20 md:py-28'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6'>
              What Drives Us
            </h2>
            <p className='text-xl text-white/70 max-w-2xl mx-auto'>
              Our core principles guide everything we do
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {team.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#8c45ff]/30 transition-all duration-300 group hover:scale-105'
              >
                <div className='inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-[#8c45ff]/20 to-[#b665ff]/20 border border-[#8c45ff]/30 mb-6 text-[#8c45ff] group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4'>{item.name}</h3>
                <p className='text-white/70'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 md:py-28 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15),transparent_50%)]'></div>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'
          >
            <div className='p-12 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center'>
              <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6'>
                Ready to Join Us?
              </h2>
              <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>
                Be part of the global trade revolution. Connect with thousands
                of verified businesses and expand your reach worldwide.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link href='/auth'>
                  <button className='px-8 py-4 rounded-lg bg-gradient-to-r from-[#8c45ff] to-[#b665ff] hover:opacity-90 transition-opacity font-medium text-lg flex items-center gap-2 group'>
                    Get Started Now
                    <FaArrowRight className='transform group-hover:translate-x-1 transition-transform duration-300' />
                  </button>
                </Link>
                <Link href='/'>
                  <button className='px-8 py-4 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 font-medium text-lg'>
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className='absolute bottom-0 left-10 w-96 h-96 bg-[#8c45ff]/10 rounded-full blur-[150px] pointer-events-none'></div>
        <div className='absolute top-0 right-10 w-96 h-96 bg-[#b665ff]/10 rounded-full blur-[150px] pointer-events-none'></div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10 py-8'>
        <div className='container mx-auto px-4'>
          <div className='text-center text-white/60 text-sm'>
            <p>© 2025 Global Trade Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
