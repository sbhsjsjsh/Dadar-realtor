import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Dadar Realtor | Prime Land & Plots in Dadar East, Mumbai',
  description: 'Dadar Realtor helps you find verified, clear-title open land and plots in Dadar East, Mumbai. Expert guidance for residential and commercial investment.',
  openGraph: {
    title: 'Dadar Realtor | Prime Land & Plots in Dadar East, Mumbai',
    description: 'Dadar Realtor helps you find verified, clear-title open land and plots in Dadar East, Mumbai.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dadar Realtor | Prime Land & Plots in Dadar East, Mumbai',
    description: 'Dadar Realtor helps you find verified, clear-title open land and plots in Dadar East, Mumbai.',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
