"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaCheck, FaUpload, FaEye } from "react-icons/fa";

export default function CompanyRegistration() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Get form data from URL params if available
  const fullNameFromParams = searchParams.get("fullName") || "";
  const emailFromParams = searchParams.get("email") || "";
  const companyNameFromParams = searchParams.get("companyName") || "";

  // Form state
  const [formData, setFormData] = useState({
    companyName: companyNameFromParams,
    businessType: "Manufacturer",
    industryCategory: "",
    country: "Egypt",
    city: "",
    registrationNumber: "",
    contactName: fullNameFromParams,
    email: emailFromParams,
    phoneNumber: "",
    website: "",
    shortBio: "",
    fullDescription: "",
    companyLogo: null,
    businessLicense: null,
    agreeTerms: false,
    // Add these new fields:
    productsCount: "",
    leadTime: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });

    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: null,
      });
    }
  };

  // Handle file uploads
  const handleFileUpload = (e) => {
    const { id, files } = e.target;
    if (files && files[0]) {
      setFormData({
        ...formData,
        [id]: files[0],
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.industryCategory)
      newErrors.industryCategory = "Industry category is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.contactName.trim())
      newErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.shortBio.trim()) newErrors.shortBio = "Short bio is required";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      // Simulate API call/saving
      setTimeout(() => {
        setIsLoading(false);
        setShowToast(true);

        // Hide toast after 1.5 seconds and route to Company Profile
        setTimeout(() => {
          setShowToast(false);
          // Navigate to Company Profile page directly
          router.push("/CompanyProfile");
        }, 1500);
      }, 1000);
    }
  };

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Success toast notification */}
      {showToast && (
        <div className='fixed top-4 right-4 z-50 bg-[#8c45ff] text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in'>
          <FaCheck className='mr-2' />
          <span>Company profile saved successfully!</span>
        </div>
      )}

      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Progress indicator */}
          <div className='mb-10'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col items-center'>
                <div className='h-10 w-10 rounded-full bg-[#8c45ff] flex items-center justify-center'>
                  <FaCheck className='text-white' />
                </div>
                <span className='text-xs mt-1'>Sign Up</span>
              </div>

              <div className='flex-1 h-1 mx-2 bg-white/15'>
                <div className='h-full bg-[#8c45ff] w-full'></div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='h-10 w-10 rounded-full bg-[#8c45ff] flex items-center justify-center'>
                  <span>2</span>
                </div>
                <span className='text-xs mt-1'>Company Profile</span>
              </div>

              <div className='flex-1 h-1 mx-2 bg-white/15'>
                <div className='h-full bg-[#8c45ff] w-0'></div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='h-10 w-10 rounded-full bg-[#8c45ff]/20 border border-white/15 flex items-center justify-center'>
                  <span>3</span>
                </div>
                <span className='text-xs mt-1'>Product Upload</span>
              </div>
            </div>
          </div>

          <div className='border border-white/15 rounded-xl p-8 bg-gradient-to-br from-[#190d2e] to-black shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            <h1 className='text-2xl font-medium mb-2'>Company Registration</h1>
            <p className='text-white/70 mb-8'>
              Complete your company profile to start uploading products.
            </p>

            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Company Information Section */}
              <div>
                <h3 className='text-lg font-medium mb-4 text-white/90 border-b border-white/15 pb-2'>
                  Company Information
                </h3>

                <div className='space-y-4'>
                  <div>
                    <label
                      htmlFor='companyName'
                      className='block text-sm font-medium mb-1'
                    >
                      Company Name <span className='text-red-400'>*</span>
                    </label>
                    <input
                      type='text'
                      id='companyName'
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full bg-[#190d2e] border ${
                        errors.companyName
                          ? "border-red-500"
                          : "border-white/15"
                      } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                      placeholder='Enter your company name'
                      required
                    />
                    {errors.companyName && (
                      <p
                        className='text-red-400 text-xs mt-1'
                        aria-live='polite'
                      >
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='businessType'
                        className='block text-sm font-medium mb-1'
                      >
                        Business Type <span className='text-red-400'>*</span>
                      </label>
                      <select
                        id='businessType'
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.businessType
                            ? "border-red-500"
                            : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all appearance-none`}
                        required
                      >
                        <option value='Manufacturer'>Manufacturer</option>
                        <option value='Wholesaler'>Wholesaler</option>
                        <option value='Trader'>Trader</option>
                      </select>
                      {errors.businessType && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.businessType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor='industryCategory'
                        className='block text-sm font-medium mb-1'
                      >
                        Industry Category{" "}
                        <span className='text-red-400'>*</span>
                      </label>
                      <select
                        id='industryCategory'
                        value={formData.industryCategory}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.industryCategory
                            ? "border-red-500"
                            : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all appearance-none`}
                        required
                      >
                        <option value=''>Select Industry</option>
                        <option value='Textiles'>Textiles & Apparel</option>
                        <option value='Food'>Food & Beverages</option>
                        <option value='Handicrafts'>Handicrafts</option>
                        <option value='Furniture'>
                          Furniture & Home Goods
                        </option>
                        <option value='Industrial'>Industrial Products</option>
                      </select>
                      {errors.industryCategory && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.industryCategory}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='country'
                        className='block text-sm font-medium mb-1'
                      >
                        Country <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        id='country'
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.country ? "border-red-500" : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        required
                      />
                      {errors.country && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.country}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor='city'
                        className='block text-sm font-medium mb-1'
                      >
                        City <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        id='city'
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.city ? "border-red-500" : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        placeholder='Enter your city'
                        required
                      />
                      {errors.city && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='registrationNumber'
                      className='block text-sm font-medium mb-1'
                    >
                      Business Registration Number{" "}
                      <span className='text-white/50'>(Optional)</span>
                    </label>
                    <input
                      type='text'
                      id='registrationNumber'
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='Enter your business registration number'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='productsCount'
                        className='block text-sm font-medium mb-1'
                      >
                        Number of Products{" "}
                        <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='number'
                        id='productsCount'
                        value={formData.productsCount}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.productsCount
                            ? "border-red-500"
                            : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        placeholder='Enter the number of products'
                        required
                      />
                      {errors.productsCount && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.productsCount}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor='leadTime'
                        className='block text-sm font-medium mb-1'
                      >
                        Average Lead Time (days){" "}
                        <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='number'
                        id='leadTime'
                        value={formData.leadTime}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.leadTime ? "border-red-500" : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        placeholder='Enter average lead time in days'
                        required
                      />
                      {errors.leadTime && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.leadTime}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details Section */}
              <div>
                <h3 className='text-lg font-medium mb-4 text-white/90 border-b border-white/15 pb-2'>
                  Contact Details
                </h3>

                <div className='space-y-4'>
                  <div>
                    <label
                      htmlFor='contactName'
                      className='block text-sm font-medium mb-1'
                    >
                      Contact Person Full Name{" "}
                      <span className='text-red-400'>*</span>
                    </label>
                    <input
                      type='text'
                      id='contactName'
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className={`w-full bg-[#190d2e] border ${
                        errors.contactName
                          ? "border-red-500"
                          : "border-white/15"
                      } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                      placeholder="Enter contact person's name"
                      required
                    />
                    {errors.contactName && (
                      <p
                        className='text-red-400 text-xs mt-1'
                        aria-live='polite'
                      >
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium mb-1'
                      >
                        Email Address <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='email'
                        id='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.email ? "border-red-500" : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        placeholder='Enter your email'
                        required
                      />
                      {errors.email && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor='phoneNumber'
                        className='block text-sm font-medium mb-1'
                      >
                        Phone Number <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='tel'
                        id='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full bg-[#190d2e] border ${
                          errors.phoneNumber
                            ? "border-red-500"
                            : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        placeholder='Enter your phone number'
                        required
                      />
                      {errors.phoneNumber && (
                        <p
                          className='text-red-400 text-xs mt-1'
                          aria-live='polite'
                        >
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='website'
                      className='block text-sm font-medium mb-1'
                    >
                      Website URL{" "}
                      <span className='text-white/50'>(Optional)</span>
                    </label>
                    <input
                      type='url'
                      id='website'
                      value={formData.website}
                      onChange={handleInputChange}
                      className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='https://yourcompany.com'
                    />
                  </div>
                </div>
              </div>

              {/* Company Description Section */}
              <div>
                <h3 className='text-lg font-medium mb-4 text-white/90 border-b border-white/15 pb-2'>
                  Company Description
                </h3>

                <div className='space-y-4'>
                  <div>
                    <label
                      htmlFor='shortBio'
                      className='block text-sm font-medium mb-1'
                    >
                      Short Bio <span className='text-red-400'>*</span>
                      <span className='text-white/50 text-xs ml-1'>
                        (Max 250 characters)
                      </span>
                    </label>
                    <textarea
                      id='shortBio'
                      value={formData.shortBio}
                      onChange={handleInputChange}
                      className={`w-full bg-[#190d2e] border ${
                        errors.shortBio ? "border-red-500" : "border-white/15"
                      } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                      placeholder='A brief description of your company'
                      maxLength={250}
                      rows={2}
                      required
                    ></textarea>
                    <div className='text-xs text-white/50 text-right mt-1'>
                      {formData.shortBio.length}/250 characters
                    </div>
                    {errors.shortBio && (
                      <p
                        className='text-red-400 text-xs mt-1'
                        aria-live='polite'
                      >
                        {errors.shortBio}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='fullDescription'
                      className='block text-sm font-medium mb-1'
                    >
                      Full Description
                      <span className='text-white/50 text-xs ml-1'>
                        (Up to 1000 characters)
                      </span>
                    </label>
                    <textarea
                      id='fullDescription'
                      value={formData.fullDescription}
                      onChange={handleInputChange}
                      className='w-full bg-[#190d2e] border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='A detailed description of your company, products, and services'
                      maxLength={1000}
                      rows={4}
                    ></textarea>
                    <div className='text-xs text-white/50 text-right mt-1'>
                      {formData.fullDescription.length}/1000 characters
                    </div>
                  </div>
                </div>
              </div>

              {/* Uploads Section */}
              <div>
                <h3 className='text-lg font-medium mb-4 text-white/90 border-b border-white/15 pb-2'>
                  Uploads
                </h3>

                <div className='space-y-6'>
                  <div>
                    <label
                      htmlFor='companyLogo'
                      className='block text-sm font-medium mb-2'
                    >
                      Company Logo
                    </label>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                      <div className='w-24 h-24 bg-[#190d2e] border border-white/15 rounded-lg flex items-center justify-center overflow-hidden'>
                        {formData.companyLogo ? (
                          <img
                            src={URL.createObjectURL(formData.companyLogo)}
                            alt='Company logo preview'
                            className='w-full h-full object-cover'
                          />
                        ) : (
                          <span className='text-white/30 text-xs text-center p-2'>
                            No logo uploaded
                          </span>
                        )}
                      </div>

                      <div className='flex-1'>
                        <label className='cursor-pointer block'>
                          <div className='relative py-3 px-4 border border-white/15 rounded-lg font-medium text-sm bg-[#190d2e] hover:border-white/30 transition-all flex items-center'>
                            <FaUpload className='mr-2' />
                            <span>
                              {formData.companyLogo
                                ? "Change Logo"
                                : "Upload Logo"}
                            </span>
                            <input
                              type='file'
                              id='companyLogo'
                              accept='image/*'
                              onChange={handleFileUpload}
                              className='sr-only'
                            />
                          </div>
                        </label>
                        <p className='text-xs text-white/50 mt-1'>
                          Recommended: Square image, minimum 200x200px (PNG,
                          JPG)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='businessLicense'
                      className='block text-sm font-medium mb-2'
                    >
                      Business License or Certificate{" "}
                      <span className='text-white/50'>(Optional)</span>
                    </label>
                    <label className='cursor-pointer block'>
                      <div className='relative py-3 px-4 border border-white/15 rounded-lg font-medium text-sm bg-[#190d2e] hover:border-white/30 transition-all flex items-center'>
                        <FaUpload className='mr-2' />
                        <span>
                          {formData.businessLicense
                            ? formData.businessLicense.name
                            : "Upload Business License (PDF)"}
                        </span>
                        <input
                          type='file'
                          id='businessLicense'
                          accept='.pdf,.doc,.docx'
                          onChange={handleFileUpload}
                          className='sr-only'
                        />
                      </div>
                    </label>
                    <p className='text-xs text-white/50 mt-1'>
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className='pt-4'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='agreeTerms'
                      type='checkbox'
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className={`h-4 w-4 rounded border-white/15 bg-[#190d2e] focus:ring-[#8c45ff] focus:ring-2 ${
                        errors.agreeTerms ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <label
                    htmlFor='agreeTerms'
                    className='ml-2 block text-sm text-white/70'
                  >
                    I agree to the{" "}
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
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p
                    className='text-red-400 text-xs mt-1 ml-6'
                    aria-live='polite'
                  >
                    {errors.agreeTerms}
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className='pt-6'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full relative py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all disabled:opacity-70'
                >
                  <div className='absolute inset-0'>
                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                  </div>
                  <span className='relative flex items-center justify-center'>
                    {isLoading ? (
                      <svg
                        className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                    ) : null}
                    Save & Continue
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
