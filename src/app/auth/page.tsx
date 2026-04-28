"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { loginSchema, registerSchema } from "@/lib/validations/auth";
import type { ZodError } from "zod";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type Tab = "signup" | "login";
type FieldErrors = Record<string, string>;

function parseZodError(err: ZodError): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of err.issues) {
    const key = issue.path[0]?.toString() ?? "_form";
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

/* ─── Password visibility toggle ─────────────────────────────────────────── */

function EyeToggle({
  show,
  onToggle,
  label,
}: {
  show: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    /* icon-only toggle inside Input rightIcon slot — intentional raw button */
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className="text-white/40 hover:text-white/80 transition-colors focus-visible:outline-none"
    >
      {show ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
    </button>
  );
}

/* ─── Main page ──────────────────────────────────────────────────────────── */

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("signup");

  /* Password visibility */
  const [showPassword,        setShowPassword]        = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /* Loading states */
  const [signupLoading, setSignupLoading] = useState(false);
  const [loginLoading,  setLoginLoading]  = useState(false);

  /* Form errors */
  const [signupErrors, setSignupErrors] = useState<FieldErrors>({});
  const [loginErrors,  setLoginErrors]  = useState<FieldErrors>({});

  /* Signup form data */
  const [signupData, setSignupData] = useState({
    fullName:        "",
    email:           "",
    phone:           "",
    companyName:     "",
    password:        "",
    confirmPassword: "",
    acceptTerms:     false,
  });

  /* Login form data */
  const [loginData, setLoginData] = useState({
    email:    "",
    password: "",
  });

  /* Demo credentials — replace with real auth integration */
  const DEMO = { email: "demo@globaltradehub.com", password: "demo1234" };

  /* ── Handlers ────────────────────────────────────────────────────────── */

  function handleSignupChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value, type, checked } = e.target;
    setSignupData((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
    if (signupErrors[id]) setSignupErrors((prev) => ({ ...prev, [id]: "" }));
  }

  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
    if (loginErrors[id]) setLoginErrors((prev) => ({ ...prev, [id]: "" }));
  }

  async function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignupErrors({});

    const result = registerSchema.safeParse({
      ...signupData,
      phone:       signupData.phone || undefined,
      companyName: signupData.companyName || undefined,
    });

    if (!result.success) {
      setSignupErrors(parseZodError(result.error));
      return;
    }

    setSignupLoading(true);
    try {
      const queryParams = new URLSearchParams({
        fullName:    result.data.fullName,
        email:       result.data.email,
        companyName: result.data.companyName ?? "",
      }).toString();
      router.push(`/CompanyRegisteration?${queryParams}`);
    } finally {
      setSignupLoading(false);
    }
  }

  async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoginErrors({});

    const result = loginSchema.safeParse(loginData);
    if (!result.success) {
      setLoginErrors(parseZodError(result.error));
      return;
    }

    setLoginLoading(true);
    try {
      /* Demo login — replace with real auth call */
      await new Promise((r) => setTimeout(r, 600));
      const match =
        result.data.email.toLowerCase() === DEMO.email &&
        result.data.password === DEMO.password;

      if (match) {
        try {
          sessionStorage.setItem(
            "gth_demo_user",
            JSON.stringify({ email: DEMO.email, loggedInAt: Date.now() })
          );
        } catch {
          /* sessionStorage unavailable — continue */
        }
        router.push("/CompanyProfile");
      } else {
        setLoginErrors({
          _form:
            "Invalid email or password. Use demo@globaltradehub.com / demo1234 to try the dashboard.",
        });
      }
    } finally {
      setLoginLoading(false);
    }
  }

  /* ── Render ──────────────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">

      {/* ── Left panel: branding ─────────────────────────────────────────── */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-black -z-10" />
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-500/10 rounded-bl-[200px] transform -rotate-12 -z-10" />

        <Link href="/" className="mb-16 inline-block" aria-label="Go to home page">
          <Logo size="lg" />
        </Link>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 leading-tight">
          Your Gateway to<br />Global Trade Success
        </h1>
        <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
          Join thousands of Egyptian exporters connecting directly with verified
          international buyers on our trusted platform.
        </p>

        <div className="mt-auto">
          <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">
            Trusted by leading businesses
          </p>
          <div className="flex gap-3 flex-wrap">
            {["Walmart", "Target", "Costco", "Home Depot"].map((name) => (
              <div key={name} className="h-8 px-4 bg-white/5 border border-white/10 rounded-lg flex items-center">
                <span className="text-white/60 text-xs font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: forms ───────────────────────────────────────────── */}
      <div className="md:w-1/2 p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-brand-950 to-black shadow-[0_0_25px_rgba(140,69,255,0.15)]">

            {/* Tab switcher */}
            <div className="flex mb-8 border border-white/10 rounded-xl p-1 gap-1" role="tablist">
              {(["signup", "login"] as const).map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => { setActiveTab(tab); setSignupErrors({}); setLoginErrors({}); }}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium text-center transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-brand-500/20 text-white border border-brand-500/30"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {tab === "signup" ? "Sign Up" : "Log In"}
                </button>
              ))}
            </div>

            {/* ── Sign Up form ──────────────────────────────────────────── */}
            {activeTab === "signup" && (
              <form className="space-y-4" onSubmit={handleSignupSubmit} noValidate>
                <Input
                  label="Full Name"
                  labelAr="الاسم الكامل"
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  placeholder="Enter your full name"
                  error={signupErrors.fullName}
                  required
                />

                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                  error={signupErrors.email}
                  required
                />

                <Input
                  label="Password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Min. 8 chars, 1 uppercase, 1 number"
                  error={signupErrors.password}
                  required
                  rightIcon={
                    <EyeToggle
                      show={showPassword}
                      onToggle={() => setShowPassword((v) => !v)}
                      label={showPassword ? "Hide password" : "Show password"}
                    />
                  }
                />

                <Input
                  label="Confirm Password"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Repeat your password"
                  error={signupErrors.confirmPassword}
                  required
                  rightIcon={
                    <EyeToggle
                      show={showConfirmPassword}
                      onToggle={() => setShowConfirmPassword((v) => !v)}
                      label={showConfirmPassword ? "Hide password" : "Show password"}
                    />
                  }
                />

                <Input
                  label="Company Name"
                  labelAr="اسم الشركة"
                  id="companyName"
                  type="text"
                  autoComplete="organization"
                  value={signupData.companyName}
                  onChange={handleSignupChange}
                  placeholder="Your company name (optional)"
                  hint="You can add this later in your profile"
                />

                {/* Terms checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="acceptTerms"
                      type="checkbox"
                      checked={signupData.acceptTerms}
                      onChange={handleSignupChange}
                      className="mt-0.5 h-4 w-4 rounded shrink-0 accent-brand-500"
                    />
                    <span className="text-xs text-white/60 leading-relaxed">
                      I agree to the{" "}
                      <Link href="/terms" className="text-brand-400 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-brand-400 hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {signupErrors.acceptTerms && (
                    <p className="mt-1 text-xs text-error">{signupErrors.acceptTerms}</p>
                  )}
                </div>

                {signupErrors._form && (
                  <p className="text-xs text-error bg-error/10 border border-error/30 rounded-lg px-3 py-2">
                    {signupErrors._form}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={signupLoading}
                >
                  Create Free Account
                </Button>

                <p className="text-xs text-white/40 text-center pt-1">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-brand-400 hover:underline focus-visible:outline-none"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}

            {/* ── Log In form ───────────────────────────────────────────── */}
            {activeTab === "login" && (
              <form className="space-y-4" onSubmit={handleLoginSubmit} noValidate>
                <Input
                  label="Email Address"
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  error={loginErrors.email}
                  required
                />

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-white/90">
                      Password <span className="text-error ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-brand-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    placeholder="Enter your password"
                    error={loginErrors.password}
                    required
                    rightIcon={
                      <EyeToggle
                        show={showPassword}
                        onToggle={() => setShowPassword((v) => !v)}
                        label={showPassword ? "Hide password" : "Show password"}
                      />
                    }
                  />
                </div>

                {loginErrors._form && (
                  <p className="text-xs text-error bg-error/10 border border-error/30 rounded-lg px-3 py-2">
                    {loginErrors._form}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={loginLoading}
                >
                  Log In
                </Button>

                <p className="text-xs text-white/40 text-center pt-1">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-brand-400 hover:underline focus-visible:outline-none"
                  >
                    Create one free
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
