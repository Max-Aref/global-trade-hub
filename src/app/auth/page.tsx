"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Ensure this import exists
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthPage() {
  const router = useRouter(); // Make sure this is initialized
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Your existing form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
  });

  // Handle input changes (existing)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Updated form submission handler
  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create query parameters with user data
    const queryParams = new URLSearchParams({
      fullName: formData.fullName,
      email: formData.email,
      companyName: formData.companyName || "",
    }).toString();

    // Navigate to the company registration page
    // Note the exact spelling "CompanyRegisteration" matches your file structure
    router.push(`/CompanyRegisteration?${queryParams}`);
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-black text-white'>
      {/* Left panel - Branding */}
      <div className='md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden'>
        {/* Background gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#190d2e] to-black -z-10'></div>
        <div className='absolute top-0 right-0 w-3/4 h-3/4 bg-[#8c45ff]/10 rounded-bl-[200px] transform -rotate-12 -z-10'></div>

        {/* Logo */}
        <Link href='/' className='mb-16 inline-block'>
          <div className='border h-14 w-14 rounded-lg inline-flex justify-center border-[#2A2A2A] p-2 items-center'>
            {/* <!-- IMAGE: Logo, company-logo.svg --> */}
            <div className='h-10 w-10 bg-[#8c45ff]/50 rounded-full'></div>
          </div>
        </Link>

        {/* Copy */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6'>
          Your Gateway to Global Trade Success
        </h1>
        <p className='text-xl text-white/70 mb-8 max-w-lg'>
          Join thousands of exporters connecting directly with U.S. buyers on
          our trusted platform.
        </p>

        {/* Trust indicators */}
        <div className='mt-auto'>
          <p className='text-sm text-white/50 mb-3'>
            TRUSTED BY LEADING BUSINESSES
          </p>
          <div className='flex space-x-6'>
            {/* Company logos with text until you add actual SVG logos */}
            <div className='h-8 w-auto px-3 bg-white/10 rounded flex items-center justify-center'>
              <span className='text-white/80 text-xs font-medium'>WALMART</span>
            </div>
            <div className='h-8 w-auto px-3 bg-white/10 rounded flex items-center justify-center'>
              <span className='text-white/80 text-xs font-medium'>AMAZON</span>
            </div>
            <div className='h-8 w-auto px-3 bg-white/10 rounded flex items-center justify-center'>
              <span className='text-white/80 text-xs font-medium'>TARGET</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - Authentication form */}
      <div className='md:w-1/2 p-8 md:p-16 flex items-center justify-center'>
        <div className='w-full max-w-md'>
          {/* Auth card */}
          <div className='border border-white/15 rounded-xl p-8 bg-gradient-to-br from-[#190d2e] to-black shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            {/* Tabs */}
            <div className='flex mb-8 border border-white/15 rounded-lg p-1'>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-center transition-all ${
                  activeTab === "signup"
                    ? "bg-[#8c45ff]/20 text-white"
                    : "text-white/50 hover:text-white"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-center transition-all ${
                  activeTab === "login"
                    ? "bg-[#8c45ff]/20 text-white"
                    : "text-white/50 hover:text-white"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
            </div>

            {/* Forms */}
            {activeTab === "signup" ? (
              <form className='space-y-4' onSubmit={handleSignUpSubmit}>
                <div>
                  <label
                    htmlFor='fullName'
                    className='block text-sm font-medium mb-1'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                    placeholder='Enter your full name'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium mb-1'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                    placeholder='Enter your email'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium mb-1'
                  >
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      id='password'
                      value={formData.password}
                      onChange={handleInputChange}
                      className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='Create a password'
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white'
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-sm font-medium mb-1'
                  >
                    Confirm Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='Confirm your password'
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='companyName'
                    className='block text-sm font-medium mb-1'
                  >
                    Company Name{" "}
                    <span className='text-white/50'>(Optional)</span>
                  </label>
                  <input
                    type='text'
                    id='companyName'
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                    placeholder='Enter your company name'
                  />
                </div>

                <div className='pt-4'>
                  <button
                    type='submit'
                    className='w-full relative py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all'
                  >
                    <div className='absolute inset-0'>
                      <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                      <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                      <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                    </div>
                    <span className='relative'>Register Now</span>
                  </button>
                </div>

                <p className='text-sm text-white/50 text-center pt-2'>
                  By signing up, you agree to our{" "}
                  <Link
                    href='/terms'
                    className='text-[#8c45ff] hover:underline'
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href='/privacy'
                    className='text-[#8c45ff] hover:underline'
                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            ) : (
              <form className='space-y-4'>
                {/* Login form unchanged */}
                <div>
                  <label
                    htmlFor='loginEmail'
                    className='block text-sm font-medium mb-1'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='loginEmail'
                    className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                    placeholder='Enter your email'
                    required
                  />
                </div>

                <div>
                  <div className='flex justify-between mb-1'>
                    <label
                      htmlFor='loginPassword'
                      className='block text-sm font-medium'
                    >
                      Password
                    </label>
                    <Link
                      href='/forgot-password'
                      className='text-sm text-[#8c45ff] hover:underline'
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className='relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      id='loginPassword'
                      className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='Enter your password'
                      required
                    />
                    <button
                      type='button'
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white'
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className='pt-4'>
                  <button
                    type='submit'
                    className='w-full relative py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all'
                  >
                    <div className='absolute inset-0'>
                      <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                      <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                      <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                    </div>
                    <span className='relative'>Log In</span>
                  </button>
                </div>

                <p className='text-sm text-white/50 text-center pt-2'>
                  Don&apos;t have an account?{" "}
                  <button
                    type='button'
                    className='text-[#8c45ff] hover:underline'
                    onClick={() => setActiveTab("signup")}
                  >
                    Sign up now
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
