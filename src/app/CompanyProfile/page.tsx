"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  FaEdit,
  FaUpload,
  FaPlus,
  FaTimes,
  FaMagic,
  FaRedo,
  FaCheck,
} from "react-icons/fa";
import {
  CompanyData,
  Product,
  EditProduct,
  FormErrors,
  EditErrors,
  ProductFormData,
  ImageUploadProps,
  DisplayToast,
} from "./types";

type EditState = CompanyData;
type EditProductState = ProductFormData | null;
type FormErrorsState = FormErrors;
type ProductErrorsState = {
  name?: string;
  description?: string;
  price?: string;
};

interface CompanyProfileProps {
  country?: string;
  city?: string;
  email?: string;
  phoneNumber?: string;
}

type HandleImageUpload = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number
) => void;

/**
 * Toast Notification Component
 * Displays success messages with animation
 */
const Toast = memo(
  ({ message, onClose }: { message: string; onClose: () => void }) => (
    <div className='fixed top-4 right-4 z-50 bg-[#8c45ff] text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in'>
      <FaCheck className='mr-2' />
      <span>{message}</span>
    </div>
  )
);
Toast.displayName = "Toast";

/**
 * Welcome Banner Component
 * Shows initial welcome message to new users
 */
const WelcomeBanner = memo(
  ({ companyName, onClose }: { companyName: string; onClose: () => void }) => (
    <div className='relative bg-gradient-to-r from-[#190d2e] to-[#4a208a] py-4 px-6 sm:px-10'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='pr-10'>
          <h2 className='font-medium text-lg'>Welcome {companyName}!</h2>
          <p className='text-white/70 text-sm mt-1'>
            Your profile is ready. Start adding your products to attract global
            buyers.
          </p>
        </div>
        <button
          onClick={onClose}
          className='text-white/70 hover:text-white transition-colors'
          aria-label='Close welcome banner'
        >
          <FaTimes />
        </button>
      </div>
    </div>
  )
);
WelcomeBanner.displayName = "WelcomeBanner";

/**
 * Company Logo Component
 * Displays company logo with fallback to initial letter
 */
const CompanyLogo = memo(
  ({ logo, companyName }: { logo?: string; companyName: string }) => (
    <div className='w-24 h-24 bg-[#190d2e] border border-white/15 rounded-lg flex items-center justify-center overflow-hidden'>
      {logo ? (
        <Image
          src={logo}
          alt={`${companyName} logo`}
          width={96}
          height={96}
          className='w-full h-full object-cover'
          loading='eager' // Load company logo immediately as it's above the fold
        />
      ) : (
        <div className='w-16 h-16 bg-[#8c45ff]/30 rounded-full flex items-center justify-center text-2xl font-medium'>
          {companyName.charAt(0)}
        </div>
      )}
    </div>
  )
);
CompanyLogo.displayName = "CompanyLogo";

/**
 * Product Card Component
 * Displays individual product information in a card format
 */
interface ProductCardProps {
  product: Product;
  onEditClick: (product: Product) => void;
}

const ProductCard = memo(({ product, onEditClick }: ProductCardProps) => (
  <div className='border border-white/15 rounded-xl overflow-hidden bg-[#190d2e] transition-all hover:border-white/30 hover:shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
    <div className='h-48 bg-gray-800 relative'>
      {typeof product.images[product.primaryImageIndex] === 'string' ? (
        <div className='w-full h-full bg-gradient-to-br from-[#190d2e] to-[#4a208a]/30 flex items-center justify-center'>
          <span className='text-white/30'>Product Image</span>
        </div>
      ) : product.images[product.primaryImageIndex] ? (
        <Image
          src={product.images[product.primaryImageIndex] as string}
          alt={product.name}
          width={400}
          height={300}
          className='w-full h-full object-cover'
          loading='lazy'
        />
      ) : (
        <div className='w-full h-full bg-gradient-to-br from-[#190d2e] to-[#4a208a]/30 flex items-center justify-center'>
          <span className='text-white/30'>No Image</span>
        </div>
      )}
    </div>

    <div className='p-4'>
      <div className='flex justify-between items-start mb-2'>
        <h3 className='font-medium text-lg'>{product.name}</h3>
        <span className='text-[#8c45ff] font-medium'>{product.price}</span>
      </div>
      <p className='text-white/70 text-sm line-clamp-3'>
        {product.description}
      </p>

      <div className='mt-4 pt-4 border-t border-white/10 flex justify-between'>
        <button
          onClick={() => onEditClick(product)}
          className='text-sm text-[#8c45ff] hover:underline'
        >
          Edit Product
        </button>
        <button className='text-sm text-white/50 hover:text-white transition-colors'>
          View Details
        </button>
      </div>
    </div>
  </div>
));
ProductCard.displayName = "ProductCard";

/**
 * Image Upload Slot Component
 * Reusable component for image upload in product forms
 */
interface ImageUploadSlotProps {
  index: number;
  image: string | null;
  isPrimary: boolean;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onSetPrimary: (index: number) => void;
}

const ImageUploadSlot = memo(
  ({ index, image, isPrimary, onImageUpload, onSetPrimary }: ImageUploadSlotProps) => (
    <div
      className={`relative aspect-square bg-black border ${
        isPrimary ? "border-[#8c45ff]" : "border-white/15"
      } rounded-lg flex items-center justify-center overflow-hidden group`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            width={200}
            height={200}
            className='w-full h-full object-cover'
          />

          <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity'>
            <button
              type='button'
              onClick={() => onSetPrimary(index)}
              className={`text-xs px-2 py-1 rounded ${
                isPrimary
                  ? "bg-[#8c45ff] text-white"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {isPrimary ? "Primary" : "Set Primary"}
            </button>

            <label className='cursor-pointer text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20'>
              Replace
              <input
                type='file'
                accept='image/*'
                onChange={(e) => onImageUpload(e, index)}
                className='sr-only'
              />
            </label>
          </div>

          {isPrimary && (
            <div className='absolute top-1 right-1 bg-[#8c45ff] text-white text-xs px-1 rounded-sm'>
              Primary
            </div>
          )}
        </>
      ) : (
        <label className='cursor-pointer flex flex-col items-center justify-center w-full h-full hover:bg-white/5 transition-colors p-2'>
          <FaUpload className='mb-1 text-white/40' />
          <span className='text-white/40 text-xs text-center'>
            Add Image {index + 1}
          </span>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => onImageUpload(e, index)}
            className='sr-only'
          />
        </label>
      )}
    </div>
  )
);
ImageUploadSlot.displayName = "ImageUploadSlot";

/**
 * Main CompanyProfile Component
 */
export default function CompanyProfile() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ===== STATE MANAGEMENT =====
  // Company data state
  const [companyData, setCompanyData] = useState({
    companyName: "Global Textiles Egypt",
    shortBio:
      "Premium Egyptian textile manufacturer specializing in cotton products for international markets.",
    companyHistory:
      "Founded in 1978, Global Textiles Egypt has over four decades of expertise in manufacturing premium cotton products. Our family-owned business began with a small facility in Alexandria and has grown into one of Egypt's leading textile exporters with three state-of-the-art manufacturing plants and over 500 skilled artisans and technicians.",
    manufacturingExpertise:
      "We combine traditional Egyptian craftsmanship with modern production techniques. Our specialized looms are calibrated for optimal thread tension to produce the finest Egyptian cotton fabrics with thread counts ranging from 300 to 1200. Every production batch undergoes rigorous quality control, with manual inspection of each piece before packaging.",
    qualityStandards:
      "Global Textiles holds OEKO-TEX® Standard 100 certification, GOTS organic certification, and ISO 9001:2015 for quality management systems. Our sustainable production practices include water recycling systems that recover 85% of processing water and solar panels that provide 40% of our energy needs.",
    businessType: "Manufacturer",
    industryCategory: "Textiles & Apparel",
    country: "Egypt",
    city: "Alexandria",
    email: "contact@globaltextiles.com",
    phoneNumber: "+20 123 456 7890",
    website: "www.globaltextiles.com",
    logo: null,
    productsCount: "24",
    leadTime: "45",
    fullDescription: "", // Added missing property
  });

  // Product state with sample data
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Premium Egyptian Cotton Towel Set",
      description:
        "Luxurious 700 GSM cotton towels with exceptional absorbency and softness. Available in multiple colors.",
      price: "$39.99",
      keyFeatures: "High GSM\nPremium Cotton\nMultiple Colors\nLuxurious Feel",
      images: ["/placeholder-product-1.jpg", null, null, null, null],
      primaryImageIndex: 0,
    },
    {
      id: "2",
      name: "Organic Cotton Bed Sheets",
      description:
        "100% GOTS certified organic Egyptian cotton sheets with 400 thread count. Breathable and eco-friendly.",
      price: "$89.99",
      keyFeatures: "100% Organic\nGOTS certified\n400 Thread Count\nEco-friendly",
      images: ["/placeholder-product-2.jpg", null, null, null, null],
      primaryImageIndex: 0,
    },
    {
      id: "3",
      name: "Handcrafted Table Runner",
      description:
        "Elegant hand-embroidered table runner made from premium cotton with traditional Egyptian patterns.",
      price: "$29.99",
      keyFeatures: "Hand-embroidered\nTraditional Patterns\nPremium Materials\nElegant Design",
      images: ["/placeholder-product-3.jpg", null, null, null, null],
      primaryImageIndex: 0,
    },
  ]);

  // UI state management
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Modal states
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);

  // Modal tabs state
  const [modalTab, setModalTab] = useState("manual"); // "manual" or "ai"

  // Form states
  const [newProduct, setNewProduct] = useState<{
    name: string;
    description: string;
    price: string;
    keyFeatures: string;
    images: (File | string | null)[];
    primaryImageIndex: number;
  }>({
    name: "",
    description: "",
    price: "",
    keyFeatures: "",
    images: [null, null, null, null, null],
    primaryImageIndex: 0,
  });
  const [productPreviews, setProductPreviews] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Edit states
  const [editData, setEditData] = useState(companyData);
  const [editProductData, setEditProductData] = useState<ProductFormData | null>(null);
  const [editErrors, setEditErrors] = useState<FormErrors>({});
  const [editProductErrors, setEditProductErrors] = useState<{
    name?: string;
    description?: string;
    price?: string;
  }>({});

  // AI and loading states
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [showAiPreview, setShowAiPreview] = useState(false);

  // ===== EFFECTS =====
  // Initialize company data from URL parameters (for when coming from registration)
  useEffect(() => {
    const companyNameParam = searchParams?.get("companyName") || "";
    const emailParam = searchParams?.get("email") || "";

    if (companyNameParam) {
      setCompanyData((prevData) => ({
        ...prevData,
        companyName: companyNameParam,
        email: emailParam || prevData.email,
      }));
    }
  }, [searchParams]);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // ===== CALLBACKS =====
  // Display toast message
  interface DisplayToast {
    (message: string): void;
  }

  const displayToast: DisplayToast = useCallback((message: string) => {
    setToastMessage(message);
    setShowToast(true);
  }, []);

  // Reset product form
  const resetProductForm = useCallback(() => {
    setNewProduct({
      name: "",
      description: "",
      price: "",
      keyFeatures: "",
      images: [null, null, null, null, null],
      primaryImageIndex: 0,
    });
    setProductPreviews([null, null, null, null, null]);
    setFormErrors({});
  }, []);

  // ===== HANDLERS =====
  // Handle input changes for new product
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setNewProduct((prev) => ({
        ...prev,
        [id]: value,
      }));

      // Clear error for this field
      if (formErrors[id]) {
        setFormErrors((prev) => ({
          ...prev,
          [id]: null,
        }));
      }
    },
    [formErrors]
  );

  // Handle image upload for new product
  interface ImageUploadEvent extends React.ChangeEvent<HTMLInputElement> {}

  interface HandleImageUpload {
    (e: ImageUploadEvent, index: number): void;
  }

  const handleImageUpload: HandleImageUpload = useCallback(
    (e, index) => {
      const file = e.target.files?.[0];
      if (file) {
        // Create a copy of the images array
        const updatedImages = [...newProduct.images];
        updatedImages[index] = file;

        // Update newProduct state
        setNewProduct((prev) => ({
          ...prev,
          images: updatedImages,
        }));

        // Create a copy of the previews array
        const updatedPreviews = [...productPreviews];
        updatedPreviews[index] = URL.createObjectURL(file);

        // Update preview state
        setProductPreviews(updatedPreviews);
      }
    },
    [newProduct.images, productPreviews]
  );

  // Set primary image for new product
  const setPrimaryImage = useCallback((index: number) => {
    setNewProduct((prev) => ({
      ...prev,
      primaryImageIndex: index,
    }));
  }, []);

  // Generate AI description for new product
  const generateAIDescription = useCallback(() => {
    if (!newProduct.name) {
      setFormErrors((prev) => ({
        ...prev,
        name: "Product name is required for AI generation",
      }));
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation delay
    setTimeout(() => {
      const features = newProduct.keyFeatures
        ? `Features include ${newProduct.keyFeatures}.`
        : "";

      const generatedDescription = `Premium quality ${newProduct.name.toLowerCase()} made with authentic Egyptian craftsmanship. ${features} Manufactured with attention to detail and exported worldwide with competitive pricing and reliable shipping.`;

      setNewProduct((prev) => ({
        ...prev,
        description: generatedDescription,
      }));

      setIsGenerating(false);
    }, 2000);
  }, [newProduct.name, newProduct.keyFeatures]);

  // Validate product form
  // Define FormErrors interface at the top of the file
  interface FormErrors {
    name?: string;
    description?: string;
    price?: string;
    companyName?: string;
    businessType?: string;
    industryCategory?: string;
    country?: string;
    city?: string;
    email?: string;
    phoneNumber?: string;
    shortBio?: string;
    [key: string]: string | undefined;
  }

  const validateProductForm = useCallback(() => {
    const errors: FormErrors = {};

    if (!newProduct.name.trim()) errors.name = "Product name is required";
    if (!newProduct.description.trim())
      errors.description = "Product description is required";
    if (!newProduct.price.trim()) errors.price = "Price is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [newProduct]);

  // Add new product
  const addProduct = useCallback(() => {
    if (!validateProductForm()) return;

    // Check if we have at least one image
    const hasAtLeastOneImage = newProduct.images.some((img) => img !== null);

    // Prepare images array for the new product
    const productImages = hasAtLeastOneImage
      ? newProduct.images.map((img, i) => (img ? productPreviews[i] : null))
      : ["/placeholder-product-1.jpg", null, null, null, null];

    const newProductObject: Product = {
      id: (products.length + 1).toString(),
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      keyFeatures: newProduct.keyFeatures || "",
      images: productImages,
      primaryImageIndex: newProduct.primaryImageIndex,
    };

    setProducts((prev) => [...prev, { ...newProductObject, keyFeatures: "" } as Product]);
    resetProductForm();
    setShowAddProductModal(false);
    displayToast("Product added successfully!");
  }, [
    validateProductForm,
    newProduct,
    productPreviews,
    products.length,
    resetProductForm,
    displayToast,
  ]);

  // Initialize edit modal
  const handleEditClick = useCallback(() => {
    setEditData({ ...companyData });
    setShowEditModal(true);
    setShowAiPreview(false);
    setAiSuggestion("");
    setEditErrors({});
  }, [companyData]);

  // Handle input changes in edit profile form
  const handleEditInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setEditData((prev) => ({
        ...prev,
        [id]: value,
      }));

      // Clear error for this field
      if (editErrors[id]) {
        setEditErrors((prev) => ({
          ...prev,
          [id]: null,
        }));
      }
    },
    [editErrors]
  );

  // Generate AI-improved description for company
  const generateImprovedDescription = useCallback(() => {
    if (!editData.fullDescription) {
      setEditErrors((prev) => ({
        ...prev,
        fullDescription: "Please enter a description first",
      }));
      return;
    }

    setIsGeneratingDescription(true);

    // Simulate AI generation with a timeout
    setTimeout(() => {
      // Marketing phrases for enhanced descriptions
      const marketingPhrases = [
        "industry-leading",
        "exceptional quality",
        "unparalleled craftsmanship",
        "renowned for excellence",
        "trusted by global buyers",
        "setting new standards in",
        "award-winning",
        "premium quality",
      ];

      // Manufacturing details to add depth to descriptions
      const manufacturingDetails = [
        "Our precision manufacturing process ensures consistent quality in every product.",
        "We maintain strict quality control through every stage of production.",
        "Our artisans combine traditional techniques with modern technology for superior results.",
        "Each product undergoes rigorous testing before shipping to ensure it meets our high standards.",
      ];

      // Create enhanced description with marketing language
      let improved = `As ${
        marketingPhrases[Math.floor(Math.random() * marketingPhrases.length)]
      } manufacturers with over four decades of expertise, ${
        editData.fullDescription
      }`;

      // Add manufacturing detail
      improved +=
        " " +
        manufacturingDetails[
          Math.floor(Math.random() * manufacturingDetails.length)
        ];

      // Add closing statement
      improved += ` We're proud to bring Egyptian craftsmanship to markets worldwide, providing exceptional value to our customers across the globe.`;

      setAiSuggestion(improved);
      setShowAiPreview(true);
      setIsGeneratingDescription(false);
    }, 2000);
  }, [editData.fullDescription]);

  // Apply AI suggestion to edit form
  const applyAiSuggestion = useCallback(() => {
    setEditData((prev) => ({
      ...prev,
      fullDescription: aiSuggestion,
    }));
    setShowAiPreview(false);
  }, [aiSuggestion]);

  // Validate edit profile form
  const validateEditForm = useCallback(() => {
    const errors: FormErrors = {};

    if (!editData.companyName.trim())
      errors.companyName = "Company name is required";
    if (!editData.businessType)
      errors.businessType = "Business type is required";
    if (!editData.industryCategory)
      errors.industryCategory = "Industry category is required";
    if (!editData.country.trim()) errors.country = "Country is required";
    if (!editData.city.trim()) errors.city = "City is required";
    if (!editData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(editData.email)) {
      errors.email = "Email is invalid";
    }
    if (!editData.phoneNumber.trim())
      errors.phoneNumber = "Phone number is required";
    if (!editData.shortBio.trim()) errors.shortBio = "Short bio is required";

    setEditErrors(errors);
    return Object.keys(errors).length === 0;
  }, [editData]);

  // Save profile changes
  const saveProfileChanges = useCallback(() => {
    if (!validateEditForm()) return;

    setIsSavingProfile(true);

    // Simulate API call/saving
    setTimeout(() => {
      // Update company data with edited values
      setCompanyData(editData);
      setIsSavingProfile(false);
      setShowEditModal(false);
      displayToast("Profile updated successfully!");
    }, 1000);
  }, [validateEditForm, editData, displayToast]);

  // Handle company logo upload
  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      // In a real app, you would upload this file to a server
      // Here we're just creating a local URL for preview
      const logoPreview = URL.createObjectURL(file);
      setEditData((prev) => ({
        ...prev,
        logo: logoPreview,
      }));
    }
  }, []);

  // Initialize edit product modal
  const handleEditProductClick = useCallback((product: Product) => {
    const productFormData: ProductFormData = {
      ...product,
      images: product.images.map(img => img ? new File([img], img, { type: 'image/jpeg' }) : null)
    };
    setEditProductData(product);
    setShowEditProductModal(true);
    setEditProductErrors({});
  }, []);

  // Handle input changes in edit product form
  const handleEditProductInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      
      setEditProductData((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          [id]: value
        };
      });

      // Clear error for this field
      if (editProductErrors[id as keyof ProductErrorsState]) {
        setEditProductErrors((prev) => ({
          ...prev,
          [id]: null,
        }));
      }
    },
    [editProductErrors]
  );

  // Handle product image upload in edit mode
  const handleEditProductImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const files = e.target.files;
      if (files && files[0]) {
        const file = files[0];
        // Create a preview URL
        const imagePreview = URL.createObjectURL(file);

        // Update the editProductData state with the new file
        setEditProductData((prev) => {
          if (!prev) return prev;
          const updatedImages = [...prev.images];
          updatedImages[index] = file;
          return {
            ...prev,
            images: updatedImages,
          };
        });
      }
    },
    [editProductData]
  );

  // Set primary image in edit product mode
  const setEditPrimaryImage = useCallback((index: number) => {
    setEditProductData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        primaryImageIndex: index,
      };
    });
  }, []);

  // Validate edit product form
  const validateEditProductForm = useCallback(() => {
    const errors: FormErrors = {};

    if (editProductData) {
      if (!editProductData.name.trim()) errors.name = "Product name is required";
      if (!editProductData.description.trim())
        errors.description = "Product description is required";
      if (!editProductData.price.trim()) errors.price = "Price is required";
      if (!editProductData.keyFeatures.trim())
        errors.keyFeatures = "Key features are required";
    }

    setEditProductErrors(errors);
    return Object.keys(errors).length === 0;
  }, [editProductData]);

  // Save edited product changes
  const saveProductChanges = useCallback(() => {
    if (!validateEditProductForm()) return;

    setIsEditingProduct(true);

    // Simulate API call/saving
    setTimeout(() => {
      // Update products array with edited values
      const updatedProducts = products.map((product) =>
        product.id === editProductData?.id && editProductData ? 
          {
            ...editProductData,
            images: editProductData.images.map(img => 
              img instanceof File ? URL.createObjectURL(img) : img
            )
          } as Product 
          : product
      );

      setProducts(updatedProducts);
      setIsEditingProduct(false);
      setShowEditProductModal(false);
      displayToast("Product updated successfully!");
    }, 1000);
  }, [validateEditProductForm, editProductData, products, displayToast]);

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Toast notification */}
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}

      {/* Welcome banner */}
      {showWelcomeBanner && (
        <WelcomeBanner
          companyName={companyData.companyName}
          onClose={() => setShowWelcomeBanner(false)}
        />
      )}

      <div className='container mx-auto px-4 py-12'>
        {/* SECTION: Company Header */}
        <section className='mb-12' aria-label='Company header'>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
            {/* Company logo */}
            <CompanyLogo
              logo={companyData.logo ?? undefined}
              companyName={companyData.companyName}
            />

            <div className='flex-1'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                <div>
                  <h1 className='text-3xl font-medium tracking-tight'>
                    {companyData.companyName}
                  </h1>
                  <p className='text-white/70 mt-2 max-w-2xl'>
                    {companyData.shortBio}
                  </p>
                </div>

                <button
                  onClick={handleEditClick}
                  className='inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm border border-white/15 hover:border-white/30 transition-all self-start'
                >
                  <FaEdit className='mr-2' />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Company Details */}
        <section
          className='border border-white/15 rounded-xl p-6 bg-gradient-to-br from-[#190d2e] to-black shadow-[0_0_25px_rgba(140,69,255,0.05)] mb-12'
          aria-label='Company details'
        >
          <h2 className='text-xl font-medium mb-6 pb-3 border-b border-white/15'>
            Company Details
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div>
              <h3 className='text-sm text-white/50 mb-1'>Business Type</h3>
              <p>{companyData.businessType}</p>
            </div>

            <div>
              <h3 className='text-sm text-white/50 mb-1'>Industry</h3>
              <p>{companyData.industryCategory}</p>
            </div>

            <div>
              <h3 className='text-sm text-white/50 mb-1'>Location</h3>
              <p>
                {companyData.city}, {companyData.country}
              </p>
            </div>

            <div>
              <h3 className='text-sm text-white/50 mb-1'>Email</h3>
              <p>{companyData.email}</p>
            </div>

            <div>
              <h3 className='text-sm text-white/50 mb-1'>Phone</h3>
              <p>{companyData.phoneNumber}</p>
            </div>

            {companyData.website && (
              <div>
                <h3 className='text-sm text-white/50 mb-1'>Website</h3>
                <a
                  href={`https://${companyData.website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#8c45ff] hover:underline'
                >
                  {companyData.website}
                </a>
              </div>
            )}

            <div>
              <h3 className='text-sm text-white/50 mb-1'>Products</h3>
              <p>{companyData.productsCount} products</p>
            </div>

            <div>
              <h3 className='text-sm text-white/50 mb-1'>Lead Time</h3>
              <p>{companyData.leadTime} days average</p>
            </div>
          </div>
        </section>

        {/* SECTION: Company History and Expertise */}
        <section
          className='border border-white/15 rounded-xl p-6 bg-gradient-to-br from-[#190d2e] to-black shadow-[0_0_25px_rgba(140,69,255,0.05)] mb-12'
          aria-label='Company history and expertise'
        >
          <div className='flex justify-between items-center mb-6 pb-3 border-b border-white/15'>
            <h2 className='text-xl font-medium'>
              Company Heritage & Expertise
            </h2>

            <div className='flex items-center px-3 py-1.5 bg-[#8c45ff]/20 rounded-full text-sm'>
              <span className='w-2 h-2 bg-[#8c45ff] rounded-full mr-2'></span>
              <span>40+ Years of Excellence</span>
            </div>
          </div>

          <div className='space-y-8'>
            {/* Company History */}
            <div>
              <h3 className='text-lg font-medium text-white/90 mb-3 flex items-center'>
                <svg
                  className='w-5 h-5 mr-2 text-[#8c45ff]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' />
                </svg>
                Our History
              </h3>
              <p className='text-white/70 text-sm leading-relaxed'>
                {companyData.companyHistory}
              </p>
            </div>

            {/* Manufacturing Expertise */}
            <div>
              <h3 className='text-lg font-medium text-white/90 mb-3 flex items-center'>
                <svg
                  className='w-5 h-5 mr-2 text-[#8c45ff]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3H19C20.11,3 21,3.89 21,5V13.03C20.5,12.23 19.81,11.54 19,11V5H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H12.03C11.23,11.5 10.54,12.19 10,13H7V11M7,15H9.17C9.06,15.5 9,16 9,16.5V17H7V15Z' />
                </svg>
                Manufacturing Expertise
              </h3>
              <p className='text-white/70 text-sm leading-relaxed'>
                {companyData.manufacturingExpertise}
              </p>
            </div>

            {/* Quality Standards */}
            <div>
              <h3 className='text-lg font-medium text-white/90 mb-3 flex items-center'>
                <svg
                  className='w-5 h-5 mr-2 text-[#8c45ff]'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' />
                </svg>
                Quality Standards
              </h3>
              <p className='text-white/70 text-sm leading-relaxed'>
                {companyData.qualityStandards}
              </p>
            </div>

            {/* Certifications */}
            <div className='pt-4 border-t border-white/10'>
              <h3 className='text-sm text-white/50 mb-3'>
                Certifications & Standards
              </h3>
              <div className='flex flex-wrap gap-3'>
                <div className='px-3 py-1.5 bg-[#190d2e] border border-white/15 rounded-full text-sm'>
                  OEKO-TEX® Certified
                </div>
                <div className='px-3 py-1.5 bg-[#190d2e] border border-white/15 rounded-full text-sm'>
                  GOTS Organic Certified
                </div>
                <div className='px-3 py-1.5 bg-[#190d2e] border border-white/15 rounded-full text-sm'>
                  ISO 9001:2015
                </div>
                <div className='px-3 py-1.5 bg-[#190d2e] border border-white/15 rounded-full text-sm'>
                  Sustainable Production
                </div>
                <div className='px-3 py-1.5 bg-[#190d2e] border border-white/15 rounded-full text-sm'>
                  Fair Trade Partner
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Products Gallery */}
        <section className='mb-12' aria-label='Company products'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-medium'>Our Products</h2>

            <button
              onClick={() => setShowAddProductModal(true)}
              className='relative py-2 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all inline-flex items-center'
            >
              <div className='absolute inset-0'>
                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
              </div>
              <span className='relative flex items-center'>
                <FaPlus className='mr-2' />
                Add New Product
              </span>
            </button>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEditClick={handleEditProductClick}
              />
            ))}
          </div>
        </section>
      </div>

      {/* MODAL: Add Product */}
      {showAddProductModal && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-start justify-center p-4 pt-[100px] transition-opacity'>
          <div className='relative bg-[#190d2e] rounded-xl max-w-2xl w-full p-6 border border-white/15 shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            <div className='flex justify-between items-center mb-6 pb-3 border-b border-white/15'>
              <h3 className='text-xl font-medium'>Add New Product</h3>
              <button
                onClick={() => setShowAddProductModal(false)}
                className='text-white/70 hover:text-white transition-colors'
                aria-label='Close modal'
              >
                <FaTimes />
              </button>
            </div>

            {/* Tabs */}
            <div className='flex mb-6 border border-white/15 rounded-lg p-1'>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-center transition-all ${
                  modalTab === "manual"
                    ? "bg-[#8c45ff]/20 text-white"
                    : "text-white/50 hover:text-white"
                }`}
                onClick={() => setModalTab("manual")}
              >
                Manual Entry
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-center transition-all ${
                  modalTab === "ai"
                    ? "bg-[#8c45ff]/20 text-white"
                    : "text-white/50 hover:text-white"
                }`}
                onClick={() => setModalTab("ai")}
              >
                AI-Generated Description
              </button>
            </div>

            {/* Form */}
            <div className='space-y-4'>
              {/* Product Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-1'
                >
                  Product Name <span className='text-red-400'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className={`w-full bg-black border ${
                    formErrors.name ? "border-red-500" : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter product name'
                />
                {formErrors.name && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Product Description - AI or Manual mode */}
              {modalTab === "ai" ? (
                <>
                  <div>
                    <label
                      htmlFor='keyFeatures'
                      className='block text-sm font-medium mb-1'
                    >
                      Key Features{" "}
                      <span className='text-white/50'>(Optional)</span>
                    </label>
                    <textarea
                      id='keyFeatures'
                      value={newProduct.keyFeatures}
                      onChange={handleInputChange}
                      className='w-full bg-black border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                      placeholder='Enter key features separated by commas'
                      rows={2}
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium mb-1'
                    >
                      Product Description{" "}
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='relative'>
                      <textarea
                        id='description'
                        value={newProduct.description}
                        onChange={handleInputChange}
                        className={`w-full bg-black border ${
                          formErrors.description
                            ? "border-red-500"
                            : "border-white/15"
                        } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                        placeholder={
                          isGenerating
                            ? "Generating description..."
                            : "AI-generated description will appear here"
                        }
                        rows={4}
                        disabled={isGenerating}
                      ></textarea>
                      {isGenerating && (
                        <div className='absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg'>
                          <div className='animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full'></div>
                        </div>
                      )}
                    </div>
                    {formErrors.description && (
                      <p
                        className='text-red-400 text-xs mt-1'
                        aria-live='polite'
                      >
                        {formErrors.description}
                      </p>
                    )}

                    <div className='mt-2 flex gap-2'>
                      <button
                        type='button'
                        onClick={generateAIDescription}
                        disabled={isGenerating}
                        className='inline-flex items-center px-4 py-2 rounded-lg text-sm border border-white/15 hover:border-white/30 transition-all disabled:opacity-50'
                      >
                        {newProduct.description ? (
                          <>
                            <FaRedo className='mr-2' />
                            Regenerate
                          </>
                        ) : (
                          <>
                            <FaMagic className='mr-2' />
                            Generate Description
                          </>
                        )}
                      </button>

                      {newProduct.description && (
                        <button
                          type='button'
                          onClick={() =>
                            setNewProduct((prev) => ({
                              ...prev,
                              description: "",
                            }))
                          }
                          className='inline-flex items-center px-3 py-2 rounded-lg text-sm border border-white/15 hover:border-white/30 transition-all'
                        >
                          <FaTimes className='mr-1' />
                          Clear
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label
                    htmlFor='description'
                    className='block text-sm font-medium mb-1'
                  >
                    Product Description <span className='text-red-400'>*</span>
                  </label>
                  <textarea
                    id='description'
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className={`w-full bg-black border ${
                      formErrors.description
                        ? "border-red-500"
                        : "border-white/15"
                    } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                    placeholder='Enter product description'
                    rows={4}
                  ></textarea>
                  {formErrors.description && (
                    <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                      {formErrors.description}
                    </p>
                  )}
                </div>
              )}

              {/* Price */}
              <div>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium mb-1'
                >
                  Price <span className='text-red-400'>*</span>
                </label>
                <input
                  type='text'
                  id='price'
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className={`w-full bg-black border ${
                    formErrors.price ? "border-red-500" : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter price (e.g. $29.99)'
                />
                {formErrors.price && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {formErrors.price}
                  </p>
                )}
              </div>

              {/* Product Images */}
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <label className='block text-sm font-medium'>
                    Product Images (Up to 5)
                  </label>
                  <span className='text-xs text-white/50'>
                    Primary image will be displayed in the product card
                  </span>
                </div>

                {/* Image Gallery Grid */}
                <div className='grid grid-cols-5 gap-2 mb-3'>
                  {[0, 1, 2, 3, 4].map((index) => (
                    <ImageUploadSlot
                      key={index}
                      index={index}
                      image={productPreviews[index]}
                      isPrimary={newProduct.primaryImageIndex === index}
                      onImageUpload={handleImageUpload}
                      onSetPrimary={setPrimaryImage}
                    />
                  ))}
                </div>

                <p className='text-xs text-white/50'>
                  Recommended: Square images, minimum 800x800px (JPG, PNG)
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className='mt-8 flex justify-end gap-3'>
              <button
                type='button'
                onClick={() => setShowAddProductModal(false)}
                className='px-4 py-2 rounded-lg font-medium text-sm border border-white/15 hover:border-white/30 transition-all'
              >
                Cancel
              </button>

              <button
                type='button'
                onClick={addProduct}
                className='relative py-2 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all'
              >
                <div className='absolute inset-0'>
                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                  <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                <span className='relative'>Save Product</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Edit Profile */}
      {showEditModal && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-start justify-center p-4 pt-[100px] transition-opacity'>
          <div className='relative bg-[#190d2e] rounded-xl max-w-2xl w-full p-6 border border-white/15 shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            <div className='flex justify-between items-center mb-6 pb-3 border-b border-white/15'>
              <h3 className='text-xl font-medium'>Edit Profile</h3>
              <button
                onClick={() => setShowEditModal(false)}
                className='text-white/70 hover:text-white transition-colors'
                aria-label='Close modal'
              >
                <FaTimes />
              </button>
            </div>

            {/* Form */}
            <div className='space-y-4'>
              {/* Company Basic Info */}
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
                  value={editData.companyName}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.companyName
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter your company name'
                />
                {editErrors.companyName && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='shortBio'
                  className='block text-sm font-medium mb-1'
                >
                  Short Bio <span className='text-red-400'>*</span>
                </label>
                <textarea
                  id='shortBio'
                  value={editData.shortBio}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.shortBio ? "border-red-500" : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter a short bio for your company'
                  rows={3}
                ></textarea>
                {editErrors.shortBio && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.shortBio}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='companyDescription'
                  className='block text-sm font-medium mb-1'
                >
                  Full Description
                </label>
                <textarea
                  id='companyDescription'
                  value={editData.fullDescription}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.fullDescription
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter a detailed description of your company'
                  rows={4}
                ></textarea>
                {editErrors.fullDescription && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.fullDescription}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='businessType'
                  className='block text-sm font-medium mb-1'
                >
                  Business Type <span className='text-red-400'>*</span>
                </label>
                <select
                  id='businessType'
                  value={editData.businessType}
                  onChange={handleEditInputChange}
                  className='w-full bg-black border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                >
                  <option value=''>Select business type</option>
                  <option value='Manufacturer'>Manufacturer</option>
                  <option value='Exporter'>Exporter</option>
                  <option value='Importer'>Importer</option>
                  <option value='Wholesaler'>Wholesaler</option>
                  <option value='Retailer'>Retailer</option>
                </select>
                {editErrors.businessType && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.businessType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='industryCategory'
                  className='block text-sm font-medium mb-1'
                >
                  Industry Category <span className='text-red-400'>*</span>
                </label>
                <input
                  type='text'
                  id='industryCategory'
                  value={editData.industryCategory}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.industryCategory
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter industry category'
                />
                {editErrors.industryCategory && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.industryCategory}
                  </p>
                )}
              </div>

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
                  value={editData.country}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.country ? "border-red-500" : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter country'
                />
                {editErrors.country && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.country}
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
                  value={editData.city}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.city ? "border-red-500" : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter city'
                />
                {editErrors.city && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.city}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-1'
                >
                  Email <span className='text-red-400'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  value={editData.email}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.email ? "border-red-500" : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter email address'
                />
                {editErrors.email && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.email}
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
                  type='text'
                  id='phoneNumber'
                  value={editData.phoneNumber}
                  onChange={handleEditInputChange}
                  className={`w-full bg-black border ${
                    editErrors.phoneNumber
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter phone number'
                />
                {editErrors.phoneNumber && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editErrors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='website'
                  className='block text-sm font-medium mb-1'
                >
                  Website
                </label>
                <input
                  type='text'
                  id='website'
                  value={editData.website}
                  onChange={handleEditInputChange}
                  className='w-full bg-black border border-white/15 rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all'
                  placeholder='Enter website URL'
                />
              </div>

              {/* Logo upload section */}
              <div>
                <label
                  htmlFor='logo'
                  className='block text-sm font-medium mb-2'
                >
                  Company Logo
                </label>
                <div className='flex items-start gap-4'>
                  <div className='w-24 h-24 bg-black border border-white/15 rounded-lg flex items-center justify-center overflow-hidden'>
                    {editData.logo ? (
                      <Image
                        src={editData.logo || '/placeholder-logo.jpg'}
                        alt='Company logo'
                        className='w-full h-full object-cover'
                        width={200}
                        height={200}
                      />
                    ) : (
                      <span className='text-white/30 text-xs text-center p-2'>
                        No logo
                      </span>
                    )}
                  </div>

                  <label className='cursor-pointer flex-1'>
                    <div className='relative py-3 px-4 border border-white/15 rounded-lg font-medium text-sm bg-black hover:border-white/30 transition-all flex items-center'>
                      <FaUpload className='mr-2' />
                      <span>
                        {editData.logo ? "Change Logo" : "Upload Logo"}
                      </span>
                      <input
                        type='file'
                        id='logo'
                        accept='image/*'
                        onChange={handleLogoUpload}
                        className='sr-only'
                      />
                    </div>
                    <p className='text-xs text-white/50 mt-1'>
                      Recommended: 300x300px or larger (JPG, PNG)
                    </p>
                  </label>
                </div>
              </div>

              {/* AI-generated description section */}
              <div>
                <label
                  htmlFor='aiDescription'
                  className='block text-sm font-medium mb-1'
                >
                  AI-Generated Description
                </label>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={generateImprovedDescription}
                    className='inline-flex items-center px-4 py-2 rounded-lg text-sm border border-white/15 hover:border-white/30 transition-all'
                  >
                    {isGeneratingDescription ? (
                      <div className='animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2'></div>
                    ) : (
                      <FaMagic className='mr-2' />
                    )}
                    Generate Description
                  </button>

                  {aiSuggestion && (
                    <button
                      onClick={applyAiSuggestion}
                      className='inline-flex items-center px-4 py-2 rounded-lg text-sm bg-[#8c45ff] text-white hover:bg-[#7a3bc4] transition-all'
                    >
                      <FaCheck className='mr-2' />
                      Apply Suggestion
                    </button>
                  )}
                </div>

                {showAiPreview && (
                  <div className='mt-4 p-4 bg-black border border-white/15 rounded-lg'>
                    <h4 className='text-sm font-medium mb-2'>
                      AI Suggestion Preview
                    </h4>
                    <p className='text-white/70 text-sm leading-relaxed'>
                      {aiSuggestion}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className='mt-8 flex justify-end gap-3'>
              <button
                type='button'
                onClick={() => setShowEditModal(false)}
                className='px-4 py-2 rounded-lg font-medium text-sm border border-white/15 hover:border-white/30 transition-all'
              >
                Cancel
              </button>

              <button
                type='button'
                onClick={saveProfileChanges}
                className='relative py-2 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all'
              >
                {isSavingProfile && (
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full'></div>
                  </div>
                )}
                <span className='relative'>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Edit Product */}
      {showEditProductModal && editProductData && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-start justify-center p-4 pt-[100px] transition-opacity'>
          <div className='relative bg-[#190d2e] rounded-xl max-w-2xl w-full p-6 border border-white/15 shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            <div className='flex justify-between items-center mb-6 pb-3 border-b border-white/15'>
              <h3 className='text-xl font-medium'>Edit Product</h3>
              <button
                onClick={() => setShowEditProductModal(false)}
                className='text-white/70 hover:text-white transition-colors'
                aria-label='Close modal'
              >
                <FaTimes />
              </button>
            </div>

            {/* Form */}
            <div className='space-y-4'>
              {/* Product Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-1'
                >
                  Product Name <span className='text-red-400'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  value={editProductData.name}
                  onChange={handleEditProductInputChange}
                  className={`w-full bg-black border ${
                    editProductErrors.name
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter product name'
                />
                {editProductErrors.name && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editProductErrors.name}
                  </p>
                )}
              </div>

              {/* Product Description */}
              <div>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium mb-1'
                >
                  Product Description <span className='text-red-400'>*</span>
                </label>
                <textarea
                  id='description'
                  value={editProductData.description}
                  onChange={handleEditProductInputChange}
                  className={`w-full bg-black border ${
                    editProductErrors.description
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter product description'
                  rows={4}
                ></textarea>
                {editProductErrors.description && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editProductErrors.description}
                  </p>
                )}
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium mb-1'
                >
                  Price <span className='text-red-400'>*</span>
                </label>
                <input
                  type='text'
                  id='price'
                  value={editProductData.price}
                  onChange={handleEditProductInputChange}
                  className={`w-full bg-black border ${
                    editProductErrors.price
                      ? "border-red-500"
                      : "border-white/15"
                  } rounded-lg px-4 py-3 focus:border-[#8c45ff] focus:outline-none focus:ring-1 focus:ring-[#8c45ff] transition-all`}
                  placeholder='Enter price (e.g. $29.99)'
                />
                {editProductErrors.price && (
                  <p className='text-red-400 text-xs mt-1' aria-live='polite'>
                    {editProductErrors.price}
                  </p>
                )}
              </div>

              {/* Product Images */}
              <div>
                <div className='flex items-center justify-between mb-2'>
                  <label className='block text-sm font-medium'>
                    Product Images (Up to 5)
                  </label>
                  <span className='text-xs text-white/50'>
                    Primary image will be displayed in the product card
                  </span>
                </div>

                {/* Image Gallery Grid */}
                <div className='grid grid-cols-5 gap-2 mb-3'>
                  {[0, 1, 2, 3, 4].map((index) => (
                    <ImageUploadSlot
                      key={index}
                      index={index}
                      image={editProductData.images[index] instanceof File ? URL.createObjectURL(editProductData.images[index] as File) : editProductData.images[index]}
                      isPrimary={editProductData.primaryImageIndex === index}
                      onImageUpload={handleEditProductImageUpload}
                      onSetPrimary={setEditPrimaryImage}
                    />
                  ))}
                </div>

                <p className='text-xs text-white/50'>
                  Recommended: Square images, minimum 800x800px (JPG, PNG)
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className='mt-8 flex justify-end gap-3'>
              <button
                type='button'
                onClick={() => setShowEditProductModal(false)}
                className='px-4 py-2 rounded-lg font-medium text-sm border border-white/15 hover:border-white/30 transition-all'
              >
                Cancel
              </button>

              <button
                type='button'
                onClick={saveProductChanges}
                disabled={isEditingProduct}
                className='relative py-2 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_#8c45ff] transition-all disabled:opacity-70'
              >
                <div className='absolute inset-0'>
                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                  <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                <span className='relative flex items-center'>
                  {isEditingProduct ? (
                    <>
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
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
