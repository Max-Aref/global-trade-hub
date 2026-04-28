"use client";

import React, { forwardRef } from "react";

/**
 * GTH Input Component
 *
 * All text input fields must use this component.
 * Enforces brand focus ring (brand-500), error state, bilingual labels (AR + EN),
 * and consistent dark-surface styling.
 *
 * Raw <input> elements are prohibited outside form components (see .eslintrc).
 */

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?:      string;
  labelAr?:    string;
  hint?:       string;
  error?:      string;
  leftIcon?:   React.ReactNode;
  rightIcon?:  React.ReactNode;
  inputSize?:  "sm" | "md" | "lg";
}

const SIZE_CLASSES = {
  sm: "px-3 py-2 text-sm min-h-[36px]",
  md: "px-4 py-3 text-sm min-h-[44px]",
  lg: "px-4 py-3.5 text-base min-h-[52px]",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      labelAr,
      hint,
      error,
      leftIcon,
      rightIcon,
      inputSize = "md",
      required,
      className = "",
      id,
      ...rest
    },
    ref
  ) {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const hasError = !!error;

    const inputClasses = [
      "w-full rounded-lg bg-brand-950 text-white",
      "border transition-colors duration-200",
      "placeholder:text-white/30",
      "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-0",
      "disabled:opacity-50 disabled:cursor-not-allowed",

      hasError
        ? "border-error focus:ring-error"
        : "border-white/15 focus:border-brand-500",

      leftIcon  ? "pl-10" : "",
      rightIcon ? "pr-10" : "",

      SIZE_CLASSES[inputSize],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="w-full">
        {/* Label row */}
        {(label || labelAr) && (
          <div className="flex items-center justify-between mb-1.5">
            {label && (
              <label
                htmlFor={inputId}
                className="block text-sm font-medium text-white/90"
              >
                {label}
                {required && (
                  <span className="text-error ml-0.5" aria-hidden="true"> *</span>
                )}
              </label>
            )}
            {labelAr && (
              <span className="text-sm text-white/60 font-arabic" dir="rtl">
                {labelAr}
              </span>
            )}
          </div>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {leftIcon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/40">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={inputClasses}
            {...rest}
          />

          {rightIcon && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/40">
              {rightIcon}
            </span>
          )}
        </div>

        {/* Hint or error message */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-xs text-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={`${inputId}-hint`} className="mt-1 text-xs text-white/50">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
