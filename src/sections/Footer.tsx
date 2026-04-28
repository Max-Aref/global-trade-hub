import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

/**
 * Marketing page footer.
 *
 * BEFORE: LiaGlobeAmericasSolid icon + hardcoded text — no variant control
 * AFTER:  <Logo> component — consistent with header and all other logo placements
 */
export const Footer = () => {
  const socialLinks = [
    { Icon: FaLinkedin,  label: "LinkedIn",  color: "#0A66C2", href: "#" },
    { Icon: FaXTwitter,  label: "X",         color: "#645b5b", href: "#" },
    { Icon: FaFacebook,  label: "Facebook",  color: "#1877F2", href: "#" },
    { Icon: FaInstagram, label: "Instagram", color: "#E1306C", href: "#" },
    { Icon: FaYoutube,   label: "YouTube",   color: "#FF0000", href: "#" },
  ] as const;

  return (
    <footer className='bg-black pt-16 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand column */}
          <div className='lg:max-w-[240px]'>
            <Logo variant='white' size='sm' href='/' className='mb-4' />
            <p className='text-white/60 text-xs leading-relaxed mt-4'>
              AI-powered global trade platform connecting Egyptian suppliers with international buyers.
            </p>
          </div>

          {/* Quick links */}
          <div className='lg:max-w-[240px]'>
            <h3 className='text-white text-sm font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {[
                { name: "Home",     href: "/"      },
                { name: "About",    href: "/about" },
                { name: "Features", href: "#features" },
                { name: "Pricing",  href: "#pricing"  },
                { name: "Contact",  href: "#"      },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='text-white/60 text-xs hover:text-white transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className='lg:max-w-[240px]'>
            <h3 className='text-white text-sm font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
              {[
                { name: "FAQs",             href: "#"         },
                { name: "Privacy Policy",   href: "#"         },
                { name: "Terms of Service", href: "#"         },
                { name: "Shipping Info",    href: "#"         },
                { name: "Sitemap",          href: "/sitemap"  },
              ].map((r) => (
                <li key={r.name}>
                  <Link href={r.href} className='text-white/60 text-xs hover:text-white transition-colors'>
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Language */}
          <div>
            <h3 className='text-white text-sm font-semibold mb-4'>Connect With Us</h3>
            <div className='flex gap-3 flex-wrap'>
              {socialLinks.map(({ Icon, label, color, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Visit our ${label} page`}
                  className='h-10 w-10 border border-white/10 rounded-lg inline-flex items-center justify-center hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
                >
                  <Icon className='h-4 w-4' style={{ color }} aria-hidden='true' />
                </a>
              ))}
            </div>

            {/* Language selector */}
            <div className='mt-6'>
              <p className='text-xs text-white/40 mb-2'>Language</p>
              <div className='flex gap-2'>
                <button className='text-xs px-3 py-1.5 rounded-lg bg-brand-500/20 border border-brand-500/40 text-brand-300 font-medium'>
                  EN
                </button>
                <button className='text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white/50 hover:border-white/20 hover:text-white transition-colors font-arabic'>
                  عربي
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/50 text-xs'>
            © {new Date().getFullYear()} Global Trade Hub. All rights reserved.
          </p>
          <p className='text-white/30 text-xs font-arabic' dir='rtl'>
            جميع الحقوق محفوظة · المنصة العالمية للتجارة
          </p>
        </div>
      </div>
    </footer>
  );
};
