import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'Open Land in Dadar East, Mumbai | Verified Plots for Sale & Investment',
  description: 'Find verified open land in Dadar East, Mumbai. Clear titles, prime locations, transparent pricing and expert support. Call +91-9004810239 to book a free site visit.',
  keywords: 'open land in dadar east, land for sale in dadar east, plots in dadar east mumbai, commercial land dadar east, residential plot dadar east, mumbai central land for sale',
  openGraph: {
    title: 'Open Land in Dadar East, Mumbai | Verified Plots for Sale & Investment',
    description: 'Find verified open land in Dadar East, Mumbai. Clear titles, prime locations, transparent pricing and expert support.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Land in Dadar East, Mumbai | Verified Plots for Sale & Investment',
    description: 'Verified open land and plots for sale in Dadar East, Mumbai.',
  },
};

export default function Page() {
  return <HomeContent />;
}
