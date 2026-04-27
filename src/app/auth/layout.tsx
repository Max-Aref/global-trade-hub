import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In / Register — Global Trade Hub",
  description:
    "Sign in to your Global Trade Hub account or create a free account to connect with 50,000+ verified U.S. buyers.",
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
