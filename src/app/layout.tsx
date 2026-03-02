import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/jsonld';
import { makeMetadata } from '@/lib/seo/metadata';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = makeMetadata('IJMB | Gain Admission into 200 Level Without UTME', 'Conversion-focused IJMB marketing website for registration, requirements, fees, centres, and FAQs.', '');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
