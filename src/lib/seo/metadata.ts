import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const makeMetadata = (title: string, description: string, path = ''): Metadata => {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
};
