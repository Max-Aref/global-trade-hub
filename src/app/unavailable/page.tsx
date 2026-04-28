import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon to your region — Global Trade Hub",
  description:
    "Global Trade Hub is currently available only in Egypt. We're expanding soon.",
  robots: { index: false, follow: false },
};

export default function UnavailablePage() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b061f] to-[#190d2e] px-6 text-white'>
      <div className='max-w-xl text-center'>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8c45ff]/20 border border-[#8c45ff]/40 mb-6'>
          <span className='text-3xl'>🌍</span>
        </div>
        <h1 className='text-3xl sm:text-4xl font-semibold tracking-tight mb-4'>
          We&apos;re launching in Egypt first
        </h1>
        <p className='text-white/70 leading-relaxed mb-8'>
          Global Trade Hub is currently available only to users in Egypt while
          we onboard our first wave of exporters and buyers. We&apos;re
          expanding to more regions soon — thank you for your patience.
        </p>
        <a
          href='mailto:hello@globaltradehub.com?subject=Notify%20me%20when%20available'
          className='inline-flex items-center gap-2 bg-[#8c45ff] hover:bg-[#7a3ae6] transition-colors px-6 py-3 rounded-lg font-medium'
        >
          Notify me when available
        </a>
      </div>
    </main>
  );
}
