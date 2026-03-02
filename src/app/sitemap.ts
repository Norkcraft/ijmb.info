import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/ijmb-registration', '/ijmb-admission-requirements', '/ijmb-fees', '/ijmb-centres-in-nigeria', '/ijmb-vs-jamb', '/faq', '/contact', '/universities-accepting-ijmb'];
  return [
    ...staticPages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() })),
    ...cities.map((city) => ({ url: `${siteConfig.url}/ijmb-in/${city}`, lastModified: new Date() }))
  ];
}
