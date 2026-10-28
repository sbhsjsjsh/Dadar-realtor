import { Metadata } from 'next';
import DadarLandPage from './PageContent';

export const metadata: Metadata = {
  title: 'Open Land for Sale in Dadar East, Mumbai | Prime Plots & Investment Land',
  description: "Looking for open land in Dadar East? Explore verified, clear-title open plots in Mumbai's most connected location. High appreciation, strong demand, expert guidance. Book a site visit today.",
  keywords: 'Open Land in Dadar East, land for sale in Dadar East, plots in Dadar East Mumbai, buy open plot in Dadar, Dadar East land investment, commercial land in Dadar East, residential plot in Dadar East, Mumbai central land for sale',
  openGraph: {
    title: 'Open Land for Sale in Dadar East, Mumbai | Prime Plots & Investment Land',
    description: "Looking for open land in Dadar East? Explore verified, clear-title open plots in Mumbai's most connected location.",
    type: 'website',
    url: '/open-land-for-sale-in-dadar-east-mumbai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Land for Sale in Dadar East, Mumbai',
    description: 'Prime Plots for Residential & Commercial Development in Dadar East, Mumbai.',
  },
};

export default function Page() {
  return <DadarLandPage />;
}
