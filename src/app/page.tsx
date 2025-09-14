import { redirect } from 'next/navigation';
import { localeConfig } from '@/config/i18n';

// This is the main entry point of the application
// Redirects to the default locale

export default function RootPage() {
  redirect(`/${localeConfig.defaultLocale}`);
}
