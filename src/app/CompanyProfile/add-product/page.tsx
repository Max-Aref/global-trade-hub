"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaBox,
  FaImage,
  FaDollarSign,
  FaInfoCircle,
  FaWarehouse,
  FaTruck,
  FaGlobe,
  FaCheckCircle,
  FaSave,
  FaTimes,
  FaPlus,
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";

interface ProductFormData {
  productName: string;
  category: string;
  description: string;
  price: string;
  minimumOrder: string;
  stockQuantity: string;
  unit: string;
  leadTime: string;
  origin: string;
  certifications: string[];
  specifications: { key: string; value: string }[];
  images: File[];
}

export default function AddProduct() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    productName: "",
    category: "",
    description: "",
    price: "",
    minimumOrder: "",
    stockQuantity: "",
    unit: "pieces",
    leadTime: "",
    origin: "",
    certifications: [],
    specifications: [{ key: "", value: "" }],
    images: [],
  });

  const categories = [
    "Electronics",
    "Textiles & Apparel",
    "Machinery",
    "Automotive Parts",
    "Food & Beverages",
    "Chemicals",
    "Building Materials",
    "Agricultural Products",
    "Medical Equipment",
    "Other",
  ];

  const units = [
    "pieces",
    "kg",
    "tons",
    "liters",
    "meters",
    "square meters",
    "cubic meters",
    "containers",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecificationChange = (
    index: number,
    field: "key" | "value",
    value: string
  ) => {
    const newSpecs = [...formData.specifications];
    newSpecs[index][field] = value;
    setFormData((prev) => ({ ...prev, specifications: newSpecs }));
  };

  const addSpecification = () => {
    setFormData((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { key: "", value: "" }],
    }));
  };

  const removeSpecification = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...filesArray],
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleAddAnother = () => {
    setFormData({
      productName: "",
      category: "",
      description: "",
      price: "",
      minimumOrder: "",
      stockQuantity: "",
      unit: "pieces",
      leadTime: "",
      origin: "",
      certifications: [],
      specifications: [{ key: "", value: "" }],
      images: [],
    });
    setCurrentStep(1);
    setSubmitted(false);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.productName &&
          formData.category &&
          formData.description &&
          formData.price
        );
      case 2:
        return (
          formData.minimumOrder &&
          formData.stockQuantity &&
          formData.leadTime &&
          formData.origin
        );
      case 3:
        return formData.images.length > 0;
      default:
        return false;
    }
  };

  /* ── Success screen ───────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className='min-h-screen bg-black text-white flex items-center justify-center px-4'>
        <div className='max-w-md w-full text-center'>
          <div className='w-20 h-20 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mx-auto mb-6'>
            <FaCheckCircle className='text-success text-4xl' />
          </div>
          <h2 className='text-2xl font-semibold tracking-tight mb-2'>
            Product Published!
          </h2>
          <p className='text-white/60 mb-8'>
            Your product is now live and visible to buyers.
            It will appear in search results within 2–4 hours.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button variant='primary' size='lg' onClick={handleAddAnother} leftIcon={<FaPlus />}>
              Add Another Product
            </Button>
            <Button variant='outline' size='lg' onClick={() => router.push('/CompanyProfile')}>
              View My Catalog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <header className='bg-gradient-to-r from-[#190d2e] to-[#2a1548] border-b border-white/15 sticky top-0 z-30'>
        <div className='px-4 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link
                href='/CompanyProfile'
                className='flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors'
              >
                <FaArrowLeft />
                <span className='font-medium'>Back to Dashboard</span>
              </Link>
            </div>
            <h1 className='text-xl font-semibold tracking-tight'>
              Add New Product
            </h1>
            <div className='w-32'></div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className='bg-gradient-to-r from-[#190d2e]/50 to-[#2a1548]/50 border-b border-white/15'>
        <div className='max-w-4xl mx-auto px-4 lg:px-8 py-6'>
          <div className='flex items-center justify-between'>
            {[
              { step: 1, label: "Basic Info", icon: FaInfoCircle },
              { step: 2, label: "Details", icon: FaWarehouse },
              { step: 3, label: "Images", icon: FaImage },
            ].map((item, index) => (
              <React.Fragment key={item.step}>
                <div className='flex flex-col items-center flex-1'>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all mb-2 ${
                      currentStep >= item.step
                        ? "bg-[#8c45ff] text-white"
                        : "bg-white/10 text-white/40"
                    }`}
                  >
                    {currentStep > item.step ? (
                      <FaCheckCircle className='text-xl' />
                    ) : (
                      <item.icon className='text-xl' />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      currentStep >= item.step ? "text-white" : "text-white/40"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded-full transition-all ${
                      currentStep > item.step ? "bg-[#8c45ff]" : "bg-white/10"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className='bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.15)_15%,rgb(14,0,36,.5)_78%,transparent)]'>
        <div className='max-w-4xl mx-auto px-4 lg:px-8 py-8'>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className='space-y-6'>
                <div className='border border-white/15 rounded-2xl overflow-hidden bg-gradient-to-br from-[#190d2e]/50 to-[#2a1548]/50'>
                  <div className='p-6 border-b border-white/15'>
                    <h2 className='text-2xl font-semibold tracking-tight flex items-center gap-2'>
                      <FaBox className='text-[#8c45ff]' />
                      Basic Product Information
                    </h2>
                    <p className='text-white/60 mt-2'>
                      Enter the essential details about your product
                    </p>
                  </div>
                  <div className='p-6 space-y-6'>
                    {/* Product Name */}
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        Product Name *
                      </label>
                      <input
                        type='text'
                        name='productName'
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder='e.g., Industrial LED Panel 600x600mm'
                        required
                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        Category *
                      </label>
                      <select
                        name='category'
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                      >
                        <option value=''>Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        Product Description *
                      </label>
                      <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder='Provide a detailed description of your product, including features, benefits, and use cases...'
                        required
                        rows={6}
                        className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#8c45ff] transition-colors resize-none'
                      />
                      <p className='text-xs text-white/50 mt-2'>
                        {formData.description.length} / 1000 characters
                      </p>
                    </div>

                    {/* Price */}
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        Unit Price (USD) *
                      </label>
                      <div className='relative'>
                        <FaDollarSign className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40' />
                        <input
                          type='number'
                          name='price'
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder='0.00'
                          step='0.01'
                          min='0'
                          required
                          className='w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Details & Logistics */}
            {currentStep === 2 && (
              <div className='space-y-6'>
                <div className='border border-white/15 rounded-2xl overflow-hidden bg-gradient-to-br from-[#190d2e]/50 to-[#2a1548]/50'>
                  <div className='p-6 border-b border-white/15'>
                    <h2 className='text-2xl font-semibold tracking-tight flex items-center gap-2'>
                      <FaWarehouse className='text-[#8c45ff]' />
                      Product Details & Logistics
                    </h2>
                    <p className='text-white/60 mt-2'>
                      Specify inventory, shipping, and additional details
                    </p>
                  </div>
                  <div className='p-6 space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {/* Minimum Order */}
                      <div>
                        <label className='block text-sm font-medium mb-2'>
                          Minimum Order Quantity *
                        </label>
                        <input
                          type='number'
                          name='minimumOrder'
                          value={formData.minimumOrder}
                          onChange={handleInputChange}
                          placeholder='e.g., 100'
                          min='1'
                          required
                          className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                        />
                      </div>

                      {/* Stock Quantity */}
                      <div>
                        <label className='block text-sm font-medium mb-2'>
                          Available Stock *
                        </label>
                        <input
                          type='number'
                          name='stockQuantity'
                          value={formData.stockQuantity}
                          onChange={handleInputChange}
                          placeholder='e.g., 5000'
                          min='0'
                          required
                          className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                        />
                      </div>

                      {/* Unit */}
                      <div>
                        <label className='block text-sm font-medium mb-2'>
                          Unit of Measurement *
                        </label>
                        <select
                          name='unit'
                          value={formData.unit}
                          onChange={handleInputChange}
                          required
                          className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                        >
                          {units.map((unit) => (
                            <option key={unit} value={unit}>
                              {unit}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Lead Time */}
                      <div>
                        <label className='block text-sm font-medium mb-2'>
                          Lead Time (days) *
                        </label>
                        <div className='relative'>
                          <FaTruck className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40' />
                          <input
                            type='number'
                            name='leadTime'
                            value={formData.leadTime}
                            onChange={handleInputChange}
                            placeholder='e.g., 30'
                            min='1'
                            required
                            className='w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                          />
                        </div>
                      </div>
                    </div>

                    {/* Country of Origin */}
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        Country of Origin *
                      </label>
                      <div className='relative'>
                        <FaGlobe className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40' />
                        <input
                          type='text'
                          name='origin'
                          value={formData.origin}
                          onChange={handleInputChange}
                          placeholder='e.g., China, USA, Germany'
                          required
                          className='w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-[#8c45ff] transition-colors'
                        />
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        Technical Specifications
                      </label>
                      <div className='space-y-3'>
                        {formData.specifications.map((spec, index) => (
                          <div key={index} className='flex gap-3'>
                            <input
                              type='text'
                              value={spec.key}
                              onChange={(e) =>
                                handleSpecificationChange(
                                  index,
                                  "key",
                                  e.target.value
                                )
                              }
                              placeholder='Property (e.g., Dimensions)'
                              className='flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-[#8c45ff] transition-colors'
                            />
                            <input
                              type='text'
                              value={spec.value}
                              onChange={(e) =>
                                handleSpecificationChange(
                                  index,
                                  "value",
                                  e.target.value
                                )
                              }
                              placeholder='Value (e.g., 600x600x12mm)'
                              className='flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-[#8c45ff] transition-colors'
                            />
                            {formData.specifications.length > 1 && (
                              <button
                                type='button'
                                onClick={() => removeSpecification(index)}
                                className='px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-lg transition-colors'
                              >
                                <FaTimes />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type='button'
                          onClick={addSpecification}
                          className='w-full py-2 border-2 border-dashed border-white/30 rounded-lg hover:border-[#8c45ff] hover:text-[#8c45ff] transition-colors text-sm font-medium'
                        >
                          + Add Specification
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Images */}
            {currentStep === 3 && (
              <div className='space-y-6'>
                <div className='border border-white/15 rounded-2xl overflow-hidden bg-gradient-to-br from-[#190d2e]/50 to-[#2a1548]/50'>
                  <div className='p-6 border-b border-white/15'>
                    <h2 className='text-2xl font-semibold tracking-tight flex items-center gap-2'>
                      <FaImage className='text-[#8c45ff]' />
                      Product Images
                    </h2>
                    <p className='text-white/60 mt-2'>
                      Upload high-quality images of your product (minimum 1
                      required)
                    </p>
                  </div>
                  <div className='p-6 space-y-6'>
                    {/* Upload Area */}
                    <div className='border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-[#8c45ff] transition-colors'>
                      <input
                        type='file'
                        id='imageUpload'
                        multiple
                        accept='image/*'
                        onChange={handleImageUpload}
                        className='hidden'
                      />
                      <label
                        htmlFor='imageUpload'
                        className='cursor-pointer block'
                      >
                        <FaImage className='text-6xl text-white/20 mx-auto mb-4' />
                        <p className='text-lg font-medium mb-2'>
                          Click to upload images
                        </p>
                        <p className='text-sm text-white/60'>
                          PNG, JPG, or WEBP (max. 5MB each)
                        </p>
                      </label>
                    </div>

                    {/* Image Preview Grid */}
                    {formData.images.length > 0 && (
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {formData.images.map((image, index) => (
                          <div
                            key={index}
                            className='relative group aspect-square bg-white/5 border border-white/15 rounded-lg overflow-hidden'
                          >
                            <Image
                              src={URL.createObjectURL(image)}
                              alt={`Product ${index + 1}`}
                              fill
                              className='object-cover'
                            />
                            <button
                              type='button'
                              onClick={() => removeImage(index)}
                              className='absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10'
                            >
                              <FaTimes />
                            </button>
                            {index === 0 && (
                              <div className='absolute bottom-2 left-2 px-2 py-1 bg-[#8c45ff] rounded text-xs font-medium z-10'>
                                Primary
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {formData.images.length === 0 && (
                      <div className='text-center py-8 text-white/50'>
                        <p>No images uploaded yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className='flex items-center justify-between mt-8'>
              <Button
                type='button'
                variant='ghost'
                size='lg'
                onClick={prevStep}
                disabled={currentStep === 1}
                leftIcon={<FaArrowLeft />}
              >
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  type='button'
                  variant='primary'
                  size='lg'
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  rightIcon={<FaArrowLeft className='rotate-180' />}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  disabled={!isStepValid()}
                  leftIcon={<FaSave />}
                >
                  Save Product
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
