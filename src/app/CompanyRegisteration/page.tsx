"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaCheck, FaUpload, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

// Egyptian governorates — used instead of a free-text city field
const EGYPT_GOVERNORATES = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Dakahlia",
  "Red Sea",
  "Beheira",
  "Faiyum",
  "Gharbia",
  "Ismailia",
  "Monufia",
  "Minya",
  "Qalyubia",
  "New Valley",
  "Suez",
  "Aswan",
  "Asyut",
  "Beni Suef",
  "Port Said",
  "Damietta",
  "Sharqia",
  "South Sinai",
  "Kafr El Sheikh",
  "Matruh",
  "Luxor",
  "Qena",
  "North Sinai",
  "Sohag",
];

interface FormData {
  companyName: string;
  businessType: string;
  industryCategory: string;
  governorate: string;
  registrationNumber: string;
  taxNumber: string;
  contactName: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  website: string;
  shortBio: string;
  fullDescription: string;
  companyLogo: File | null;
  businessLicense: File | null;
  agreeTerms: boolean;
  productsCount: string;
  leadTime: string;
}

interface FormErrors {
  companyName?: string;
  businessType?: string;
  industryCategory?: string;
  governorate?: string;
  contactName?: string;
  email?: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  shortBio?: string;
  agreeTerms?: string;
  productsCount?: string;
  leadTime?: string;
}

function CompanyRegistration() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    companyName: searchParams?.get("companyName") || "",
    businessType: "Manufacturer",
    industryCategory: "",
    governorate: "",
    registrationNumber: "",
    taxNumber: "",
    contactName: searchParams?.get("fullName") || "",
    email: searchParams?.get("email") || "",
    phoneNumber: "",
    whatsappNumber: "",
    website: "",
    shortBio: "",
    fullDescription: "",
    companyLogo: null,
    businessLicense: null,
    agreeTerms: false,
    productsCount: "",
    leadTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value, type } = e.target;
    const checked = "checked" in e.target ? e.target.checked : false;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = e.target;
    if (files?.[0]) setFormData((prev) => ({ ...prev, [id]: files[0] }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.businessType)
      newErrors.businessType = "Business type is required";
    if (!formData.industryCategory)
      newErrors.industryCategory = "Industry is required";
    if (!formData.governorate)
      newErrors.governorate = "Governorate is required";
    if (!formData.contactName.trim())
      newErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.shortBio.trim()) newErrors.shortBio = "Short bio is required";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        const params = new URLSearchParams({
          companyName: formData.companyName,
          businessType: formData.businessType,
          industryCategory: formData.industryCategory,
          country: "Egypt",
          city: formData.governorate,
          registrationNumber: formData.registrationNumber,
          contactName: formData.contactName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          website: formData.website,
          shortBio: formData.shortBio,
          fullDescription: formData.fullDescription,
          productsCount: formData.productsCount,
          leadTime: formData.leadTime,
        }).toString();
        router.push(`/CompanyProfile?${params}`);
      }, 1500);
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Toast */}
      {showToast && (
        <div className='fixed top-4 right-4 z-50 bg-success text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-fade-in'>
          <FaCheck />
          <span>Company profile saved successfully!</span>
        </div>
      )}

      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Progress steps */}
          <div className='mb-10'>
            <div className='flex items-center justify-between'>
              {[
                { label: "Sign Up", done: true },
                { label: "Company Profile", done: false },
                { label: "Product Upload", done: false },
              ].map((step, i, arr) => (
                <React.Fragment key={step.label}>
                  <div className='flex flex-col items-center'>
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.done
                          ? "bg-brand-500 text-white"
                          : i === 1
                            ? "bg-brand-500 text-white"
                            : "bg-brand-500/20 border border-white/15 text-white/50"
                      }`}
                    >
                      {step.done ? <FaCheck /> : i + 1}
                    </div>
                    <span className='text-xs mt-1 text-white/60'>
                      {step.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className='flex-1 h-1 mx-2 bg-white/10'>
                      <div
                        className={`h-full bg-brand-500 transition-all ${step.done ? "w-full" : "w-0"}`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className='border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-brand-950 to-black shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            <h1 className='text-2xl font-semibold mb-1'>
              Company Registration
            </h1>
            <p className='text-white/50 mb-8 text-sm'>
              Complete your company profile to start uploading products.
            </p>

            <form onSubmit={handleSubmit} className='space-y-10'>
              {/* ── Company Information ─────────────────────────────────── */}
              <section>
                <h3 className='text-base font-semibold mb-5 text-white/80 border-b border-white/10 pb-2'>
                  Company Information
                </h3>
                <div className='space-y-4'>
                  <Input
                    id='companyName'
                    label='Company Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder='Enter your company name'
                    error={errors.companyName}
                    required
                  />

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Select
                      id='businessType'
                      label='Business Type'
                      value={formData.businessType}
                      onChange={handleChange}
                      error={errors.businessType}
                      required
                      options={[
                        {
                          value: "Manufacturer",
                          label: "Manufacturer — مصنّع",
                        },
                        {
                          value: "Wholesaler",
                          label: "Wholesaler — تاجر جملة",
                        },
                        { value: "Trader", label: "Trader — تاجر" },
                        { value: "Exporter", label: "Exporter — مصدّر" },
                      ]}
                    />

                    <Select
                      id='industryCategory'
                      label='Industry Category'
                      value={formData.industryCategory}
                      onChange={handleChange}
                      error={errors.industryCategory}
                      required
                      placeholder='Select industry'
                      options={[
                        {
                          value: "Textiles",
                          label: "Textiles & Apparel — منسوجات",
                        },
                        { value: "Food", label: "Food & Beverages — أغذية" },
                        {
                          value: "Handicrafts",
                          label: "Handicrafts — حرف يدوية",
                        },
                        {
                          value: "Furniture",
                          label: "Furniture & Home — أثاث",
                        },
                        {
                          value: "Industrial",
                          label: "Industrial Products — صناعات",
                        },
                        { value: "Chemicals", label: "Chemicals — كيماويات" },
                        {
                          value: "Agricultural",
                          label: "Agricultural — زراعة",
                        },
                        {
                          value: "Building",
                          label: "Building Materials — مواد بناء",
                        },
                        { value: "Medical", label: "Medical Equipment — طبي" },
                        {
                          value: "Packaging",
                          label: "Packaging & Printing — تغليف",
                        },
                      ]}
                    />
                  </div>

                  <Select
                    id='governorate'
                    label='Governorate'
                    value={formData.governorate}
                    onChange={handleChange}
                    error={errors.governorate}
                    required
                    placeholder='Select governorate'
                    options={EGYPT_GOVERNORATES.map((g) => ({
                      value: g,
                      label: g,
                    }))}
                  />

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                      id='registrationNumber'
                      label='Commercial Registration No.'
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      placeholder='e.g. 123456'
                      hint='Ministry of Commerce issued number'
                    />
                    <Input
                      id='taxNumber'
                      label='Tax Identification No.'
                      value={formData.taxNumber}
                      onChange={handleChange}
                      placeholder='9-digit tax number'
                      hint='Egyptian Tax Authority'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                      id='productsCount'
                      label='Number of Products'
                      type='number'
                      value={formData.productsCount}
                      onChange={handleChange}
                      placeholder='e.g. 50'
                    />
                    <Input
                      id='leadTime'
                      label='Average Lead Time (days)'
                      type='number'
                      value={formData.leadTime}
                      onChange={handleChange}
                      placeholder='e.g. 14'
                    />
                  </div>
                </div>
              </section>

              {/* ── Contact Details ─────────────────────────────────────── */}
              <section>
                <h3 className='text-base font-semibold mb-5 text-white/80 border-b border-white/10 pb-2'>
                  Contact Details
                </h3>
                <div className='space-y-4'>
                  <Input
                    id='contactName'
                    label='Contact Person Full Name'
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Enter contact person's name"
                    error={errors.contactName}
                    required
                  />

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input
                      id='email'
                      label='Email Address'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='company@example.com'
                      error={errors.email}
                      required
                    />
                    <Input
                      id='phoneNumber'
                      label='Office Phone'
                      type='tel'
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder='+20 2 XXXX XXXX'
                      error={errors.phoneNumber}
                      required
                    />
                  </div>

                  {/* WhatsApp — critical for Egyptian B2B market */}
                  <Input
                    id='whatsappNumber'
                    label='WhatsApp Number'
                    type='tel'
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder='+20 10X XXX XXXX'
                    hint='Buyers will contact you directly on WhatsApp — highly recommended'
                    error={errors.whatsappNumber}
                    leftIcon={<FaWhatsapp className='text-social-whatsapp' />}
                  />

                  <Input
                    id='website'
                    label='Website URL'
                    type='url'
                    value={formData.website}
                    onChange={handleChange}
                    placeholder='https://yourcompany.com'
                    hint='Optional'
                  />
                </div>
              </section>

              {/* ── Company Description ─────────────────────────────────── */}
              <section>
                <h3 className='text-base font-semibold mb-5 text-white/80 border-b border-white/10 pb-2'>
                  Company Description
                </h3>
                <div className='space-y-4'>
                  <div>
                    <label
                      htmlFor='shortBio'
                      className='block text-sm font-medium mb-1.5 text-white/90'
                    >
                      Short Bio <span className='text-error ml-0.5'>*</span>
                      <span className='text-white/40 text-xs ml-2'>
                        (max 250 chars)
                      </span>
                    </label>
                    <textarea
                      id='shortBio'
                      value={formData.shortBio}
                      onChange={handleChange}
                      rows={2}
                      maxLength={250}
                      placeholder='A brief description of your company'
                      className={`w-full bg-brand-950 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors resize-none ${
                        errors.shortBio
                          ? "border-error"
                          : "border-white/15 focus:border-brand-500"
                      }`}
                    />
                    <div className='flex justify-between mt-1'>
                      {errors.shortBio ? (
                        <p className='text-xs text-error'>{errors.shortBio}</p>
                      ) : (
                        <span />
                      )}
                      <span className='text-xs text-white/40 ml-auto'>
                        {formData.shortBio.length}/250
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='fullDescription'
                      className='block text-sm font-medium mb-1.5 text-white/90'
                    >
                      Full Description
                      <span className='text-white/40 text-xs ml-2'>
                        (max 1000 chars)
                      </span>
                    </label>
                    <textarea
                      id='fullDescription'
                      value={formData.fullDescription}
                      onChange={handleChange}
                      rows={4}
                      maxLength={1000}
                      placeholder='Detailed description: products, history, capabilities, export experience…'
                      className='w-full bg-brand-950 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none'
                    />
                    <p className='text-xs text-white/40 text-right mt-1'>
                      {formData.fullDescription.length}/1000
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Uploads ─────────────────────────────────────────────── */}
              <section>
                <h3 className='text-base font-semibold mb-5 text-white/80 border-b border-white/10 pb-2'>
                  Uploads
                </h3>
                <div className='space-y-6'>
                  {/* Logo upload */}
                  <div>
                    <p className='text-sm font-medium mb-2 text-white/90'>
                      Company Logo
                    </p>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                      <div className='w-20 h-20 bg-brand-950 border border-white/15 rounded-xl flex items-center justify-center overflow-hidden shrink-0'>
                        {formData.companyLogo ? (
                          <Image
                            src={URL.createObjectURL(formData.companyLogo)}
                            alt='Logo preview'
                            width={80}
                            height={80}
                            className='object-cover w-full h-full'
                          />
                        ) : (
                          <span className='text-white/20 text-xs text-center px-2'>
                            No logo
                          </span>
                        )}
                      </div>
                      <div className='flex-1'>
                        <label className='cursor-pointer block'>
                          <div className='flex items-center gap-2 px-4 py-2.5 border border-white/15 rounded-lg bg-brand-950 hover:border-brand-500/50 text-sm text-white/70 transition-colors w-fit'>
                            <FaUpload className='text-xs' />
                            {formData.companyLogo
                              ? "Change Logo"
                              : "Upload Logo"}
                          </div>
                          <input
                            type='file'
                            id='companyLogo'
                            accept='image/*'
                            onChange={handleFileUpload}
                            className='sr-only'
                          />
                        </label>
                        <p className='text-xs text-white/40 mt-1.5'>
                          Min 200×200px · PNG or SVG preferred
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business license */}
                  <div>
                    <p className='text-sm font-medium mb-2 text-white/90'>
                      Business License / Commercial Register
                      <span className='text-white/40 text-xs ml-2'>
                        (optional)
                      </span>
                    </p>
                    <label className='cursor-pointer block w-fit'>
                      <div className='flex items-center gap-2 px-4 py-2.5 border border-white/15 rounded-lg bg-brand-950 hover:border-brand-500/50 text-sm text-white/70 transition-colors'>
                        <FaUpload className='text-xs' />
                        {formData.businessLicense
                          ? formData.businessLicense.name
                          : "Upload Document (PDF)"}
                      </div>
                      <input
                        type='file'
                        id='businessLicense'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileUpload}
                        className='sr-only'
                      />
                    </label>
                    <p className='text-xs text-white/40 mt-1.5'>
                      PDF, DOC — max 5 MB
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Terms ───────────────────────────────────────────────── */}
              <div className='flex items-start gap-3'>
                <input
                  id='agreeTerms'
                  type='checkbox'
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className='mt-0.5 h-4 w-4 rounded accent-brand-500 shrink-0'
                />
                <div>
                  <label
                    htmlFor='agreeTerms'
                    className='text-sm text-white/70 cursor-pointer'
                  >
                    I agree to the{" "}
                    <Link
                      href='/terms'
                      className='text-brand-400 hover:underline'
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href='/privacy'
                      className='text-brand-400 hover:underline'
                    >
                      Privacy Policy
                    </Link>
                  </label>
                  {errors.agreeTerms && (
                    <p className='text-xs text-error mt-0.5'>
                      {errors.agreeTerms}
                    </p>
                  )}
                </div>
              </div>

              {/* ── Submit ──────────────────────────────────────────────── */}
              <Button
                type='submit'
                variant='primary'
                size='lg'
                fullWidth
                loading={isLoading}
              >
                Save & Continue
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CompanyRegistrationWrapper() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center min-h-screen bg-black text-white'>
          Loading…
        </div>
      }
    >
      <CompanyRegistration />
    </Suspense>
  );
}
