import { makeMetadata } from '@/lib/seo/metadata';
import { PageTemplate } from '@/components/sections/PageTemplate';
import { faqJsonLd } from '@/lib/seo/jsonld';

export const metadata = makeMetadata('IJMB Frequently Asked Questions', 'Get clear answers to common IJMB questions on registration, fees, centres, and admission.', '/faq');

const faqs = [
    { question: 'When should I apply?', answer: 'Apply early to secure your preferred centre and session.' },
    { question: 'Can I combine O’Level sittings?', answer: 'Yes, most IJMB centres accept up to two sittings.' },
    { question: 'Do I still need UTME?', answer: 'No, IJMB gives you a direct entry pathway into 200 level.' }
  ];

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} /><PageTemplate title="IJMB Frequently Asked Questions" intro="Get clear answers to common IJMB questions on registration, fees, centres, and admission." points={[    'Get step-by-step support from application to admission letter.',
    'Use verified centres and approved schedules to avoid delays.',
    'Improve your admission confidence with smart academic planning.',
  ]} faqs={faqs} /></>;
}
