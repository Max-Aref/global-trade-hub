"use client";

import React, { forwardRef } from "react";

/**
 * GTH Select Component
 *
 * All <select> dropdowns must use this component.
 * Enforces brand focus ring, consistent dark styling, and error state.
 * Supports option groups via the `groups` prop.
 */

export interface SelectOption {
  value:    string;
  label:    string;
  disabled?: boolean;
}

export interface SelectGroup {
  label:   string;
  options: SelectOption[];
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?:       string;
  labelAr?:     string;
  hint?:        string;
  error?:       string;
  options?:     SelectOption[];
  groups?:      SelectGroup[];
  placeholder?: string;
  inputSize?:   "sm" | "md" | "lg";
}

const SIZE_CLASSES = {
  sm: "px-3 py-2 text-sm  min-h-[36px]",
  md: "px-4 py-3 text-sm  min-h-[44px]",
  lg: "px-4 py-3.5 text-base min-h-[52px]",
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      labelAr,
      hint,
      error,
      options,
      groups,
      placeholder,
      inputSize  = "md",
      required,
      className  = "",
      id,
      ...rest
    },
    ref
  ) {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const hasError = !!error;

    const selectClasses = [
      "w-full rounded-lg bg-brand-950 text-white",
      "border transition-colors duration-200",
      "appearance-none cursor-pointer",
      "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-0",
      "disabled:opacity-50 disabled:cursor-not-allowed",

      hasError
        ? "border-error focus:ring-error"
        : "border-white/15 focus:border-brand-500",

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
                htmlFor={selectId}
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

        {/* Select wrapper with custom chevron */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
            }
            className={selectClasses}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {/* Flat options */}
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}

            {/* Grouped options */}
            {groups?.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {/* Custom chevron icon */}
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/40">
            <svg
              width="16" height="16" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Hint or error */}
        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-1 text-xs text-error"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={`${selectId}-hint`} className="mt-1 text-xs text-white/50">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
