"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"signup" | "login">("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
  });

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [loginError, setLoginError] = useState<string | null>(null);

  // Demo credentials for testing the dashboard without a real auth backend
  const DEMO_CREDENTIALS = {
    email: "demo@globaltradehub.com",
    password: "demo1234",
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
    if (loginError) setLoginError(null);
  };

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const queryParams = new URLSearchParams({
      fullName: formData.fullName,
      email: formData.email,
      companyName: formData.companyName || "",
    }).toString();
    router.push(`/CompanyRegisteration?${queryParams}`);
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailMatch =
      loginData.loginEmail.trim().toLowerCase() === DEMO_CREDENTIALS.email;
    const passwordMatch = loginData.loginPassword === DEMO_CREDENTIALS.password;

    if (emailMatch && passwordMatch) {
      try {
        sessionStorage.setItem(
          "gth_demo_user",
          JSON.stringify({
            email: DEMO_CREDENTIALS.email,
            loggedInAt: Date.now(),
          }),
        );
      } catch {
        /* sessionStorage may be unavailable; ignore */
      }
      router.push("/CompanyProfile");
    } else {
      setLoginError(
        "Invalid credentials. Use demo@globaltradehub.com / demo1234 to test the dashboard.",
      );
    }
  };

  const EyeToggle = ({
    show,
    onToggle,
    label,
  }: {
    show: boolean;
    onToggle: () => void;
    label: string;
  }) => (
    /* raw <button> here is intentional — it's an icon-only toggle inside
       an Input's rightIcon slot, not a CTA. ESLint override covers auth page. */
    <button
      type='button'
      onClick={onToggle}
      aria-label={label}
      className='text-white/40 hover:text-white/80 transition-colors focus-visible:outline-none'
    >
      {show ? (
        <FaEyeSlash className='w-4 h-4' />
      ) : (
        <FaEye className='w-4 h-4' />
      )}
    </button>
  );

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-black text-white'>
      {/* ── Left panel: branding ──────────────────────────────────────────── */}
      <div className='md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-brand-950 to-black -z-10' />
        <div className='absolute top-0 right-0 w-3/4 h-3/4 bg-brand-500/10 rounded-bl-[200px] transform -rotate-12 -z-10' />

        <Link href='/' className='mb-16 inline-block'>
          <Logo variant='brand' size='lg' />
        </Link>

        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 leading-tight'>
          Your Gateway to
          <br />
          Global Trade Success
        </h1>
        <p className='text-lg text-white/60 mb-8 max-w-lg leading-relaxed'>
          Join thousands of Egyptian exporters connecting directly with verified
          international buyers on our trusted platform.
        </p>

        {/* Trust indicators */}
        <div className='mt-auto'>
          <p className='text-xs text-white/40 mb-3 uppercase tracking-widest'>
            Trusted by leading businesses
          </p>
          <div className='flex gap-3 flex-wrap'>
            {["Walmart", "Amazon", "Target", "Costco"].map((name) => (
              <div
                key={name}
                className='h-8 px-4 bg-white/5 border border-white/10 rounded-lg flex items-center'
              >
                <span className='text-white/60 text-xs font-medium'>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: auth forms ───────────────────────────────────────── */}
      <div className='md:w-1/2 p-8 md:p-16 flex items-center justify-center'>
        <div className='w-full max-w-md'>
          <div className='border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-brand-950 to-black shadow-[0_0_25px_rgba(140,69,255,0.15)]'>
            {/* Tab switcher */}
            <div className='flex mb-8 border border-white/10 rounded-xl p-1 gap-1'>
              {(["signup", "login"] as const).map((tab) => (
                /* Tab controls are not action CTAs — raw button with tab role is correct here */
                <button
                  key={tab}
                  role='tab'
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
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
              <form className='space-y-4' onSubmit={handleSignUpSubmit}>
                <Input
                  label='Full Name'
                  id='fullName'
                  type='text'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder='Enter your full name'
                  required
                />

                <Input
                  label='Email Address'
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email'
                  required
                />

                <Input
                  label='Password'
                  id='password'
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder='Create a password'
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
                  label='Confirm Password'
                  id='confirmPassword'
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder='Confirm your password'
                  required
                  rightIcon={
                    <EyeToggle
                      show={showConfirmPassword}
                      onToggle={() => setShowConfirmPassword((v) => !v)}
                      label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    />
                  }
                />

                <Input
                  label='Company Name'
                  id='companyName'
                  type='text'
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder='Enter your company name (optional)'
                  hint='You can add this later in your profile'
                />

                <div className='pt-2'>
                  <Button type='submit' variant='primary' size='lg' fullWidth>
                    Register Now
                  </Button>
                </div>

                <p className='text-xs text-white/40 text-center pt-1'>
                  By signing up, you agree to our{" "}
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
                </p>
              </form>
            )}

            {/* ── Log In form ───────────────────────────────────────────── */}
            {activeTab === "login" && (
              <form className='space-y-4' onSubmit={handleLoginSubmit}>
                <Input
                  label='Email Address'
                  id='loginEmail'
                  type='email'
                  value={loginData.loginEmail}
                  onChange={handleLoginInputChange}
                  placeholder='Enter your email'
                  required
                />

                <div>
                  <div className='flex items-center justify-between mb-1.5'>
                    <label
                      htmlFor='loginPassword'
                      className='text-sm font-medium text-white/90'
                    >
                      Password
                    </label>
                    <Link
                      href='/forgot-password'
                      className='text-xs text-brand-400 hover:underline'
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    id='loginPassword'
                    type={showPassword ? "text" : "password"}
                    value={loginData.loginPassword}
                    onChange={handleLoginInputChange}
                    placeholder='Enter your password'
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

                {loginError && (
                  <p
                    role='alert'
                    className='text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2'
                  >
                    {loginError}
                  </p>
                )}

                {/* Demo credentials hint — for testing only */}
                <div className='text-xs bg-brand-500/10 border border-brand-500/20 rounded-lg px-3 py-2 text-white/70'>
                  <p className='font-semibold text-brand-300 mb-1'>
                    Demo credentials
                  </p>
                  <p>
                    Email:{" "}
                    <code className='text-white/90'>
                      demo@globaltradehub.com
                    </code>
                  </p>
                  <p>
                    Password: <code className='text-white/90'>demo1234</code>
                  </p>
                  <button
                    type='button'
                    onClick={() =>
                      setLoginData({
                        loginEmail: DEMO_CREDENTIALS.email,
                        loginPassword: DEMO_CREDENTIALS.password,
                      })
                    }
                    className='mt-2 text-brand-400 hover:underline'
                  >
                    Fill demo credentials
                  </button>
                </div>

                <div className='pt-2'>
                  <Button type='submit' variant='primary' size='lg' fullWidth>
                    Log In
                  </Button>
                </div>

                <p className='text-sm text-white/50 text-center pt-1'>
                  Don&apos;t have an account?{" "}
                  <Button
                    type='button'
                    variant='link'
                    size='sm'
                    onClick={() => setActiveTab("signup")}
                  >
                    Sign up now
                  </Button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
