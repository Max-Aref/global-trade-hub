"use client";
import React from "react";
import {
  FaShieldAlt,
  FaUserCheck,
  FaLock,
  FaFileContract,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";

export const SecurityTrustFeatures = () => {
  const securityFeatures = [
    {
      icon: FaShieldAlt,
      title: "Bank-Level Encryption",
      description:
        "All sensitive data is protected with AES-256 encryption and SSL/TLS protocols trusted by financial institutions worldwide.",
    },
    {
      icon: FaUserCheck,
      title: "Verified Buyer Network",
      description:
        "Every buyer undergoes comprehensive verification including business licenses, credit checks, and trade history validation.",
    },
    {
      icon: FaLock,
      title: "Secure Escrow Payments",
      description:
        "Payment protection through trusted escrow services ensures you receive payment before goods are released to buyers.",
    },
    {
      icon: FaFileContract,
      title: "Legal Contract Protection",
      description:
        "Automated smart contracts with dispute resolution mechanisms protect both parties throughout the transaction process.",
    },
    {
      icon: FaCertificate,
      title: "Compliance Certification",
      description:
        "GDPR, SOC 2, and international trade compliance built-in, with automated documentation for customs and regulatory requirements.",
    },
    {
      icon: FaUserTie,
      title: "Dedicated Account Protection",
      description:
        "24/7 fraud monitoring, two-factor authentication, and dedicated security specialists monitoring your account activity.",
    },
  ];

  return (
    <section className='py-20 md:py-24'>
      <div className='container'>
        <div className='max-w-7xl mx-auto'>
          {/* Main heading */}
          <div className='text-center mb-16'>
            <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>
              Security & Trust You Can Count On
            </h2>
            <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5'>
              Your business reputation and financial security are paramount.
              We&rsquo;ve built enterprise-grade protection into every aspect of
              our platform.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className='border border-white/15 rounded-xl p-2.5'
              >
                <div className='flex gap-2.5 items-center mb-2'>
                  <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
                    <feature.icon className='h-5 w-5 text-[#8c45ff]' />
                  </div>
                  <h4 className='font-medium'>{feature.title}</h4>
                </div>
                <p className='text-white/70 text-sm'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrustFeatures;
