import React from "react";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

type CalloutTone = "info" | "warning" | "tip" | "success";

interface CalloutProps {
  tone?: CalloutTone;
  title?: string;
  children: React.ReactNode;
}

const TONE: Record<
  CalloutTone,
  {
    wrap: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
  }
> = {
  info: {
    wrap: "bg-info/5 border-info/40 text-info",
    icon: FaInfoCircle,
    title: "text-info",
  },
  warning: {
    wrap: "bg-warning/5 border-warning/40 text-warning",
    icon: FaExclamationTriangle,
    title: "text-warning",
  },
  tip: {
    wrap: "bg-brand-500/5 border-brand-500/40 text-brand-300",
    icon: FaLightbulb,
    title: "text-brand-300",
  },
  success: {
    wrap: "bg-success/5 border-success/40 text-success",
    icon: FaCheckCircle,
    title: "text-success",
  },
};

export function Callout({ tone = "info", title, children }: CalloutProps) {
  const t = TONE[tone];
  const Icon = t.icon;
  return (
    <aside
      className={`my-6 rounded-xl border ${t.wrap} bg-opacity-100 px-5 py-4 flex gap-3`}
      role='note'
    >
      <Icon className='mt-0.5 shrink-0 h-5 w-5' aria-hidden='true' />
      <div className='text-sm leading-relaxed text-white/80'>
        {title && <p className={`font-semibold mb-1 ${t.title}`}>{title}</p>}
        <div className='space-y-2'>{children}</div>
      </div>
    </aside>
  );
}
