import { ChangeEvent } from "react";

export interface FormErrors {
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

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: string;
  keyFeatures: string;
  images: (File | null)[];
  primaryImageIndex: number;
}

export interface CompanyData {
  companyName: string;
  shortBio: string;
  companyHistory: string;
  manufacturingExpertise: string;
  qualityStandards: string;
  businessType: string;
  industryCategory: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  logo: string | null;
  fullDescription: string;
}

export interface EditProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  keyFeatures?: string;
  images: (string | null)[];
  primaryImageIndex: number;
}

export interface ImageUploadProps {
  index: number;
  image: string | null;
  isPrimary: boolean;
  onImageUpload: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onSetPrimary: (index: number) => void;
}

export interface EditErrors {
  [key: string]: string | null;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: string;
  keyFeatures: string;
  images: (File | null)[];
  primaryImageIndex: number;
}

export interface DisplayToast {
  (message: string): void;
}
