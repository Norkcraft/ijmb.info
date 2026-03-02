import { makeMetadata } from '@/lib/seo/metadata';
import { PageTemplate } from '@/components/sections/PageTemplate';
import { faqJsonLd } from '@/lib/seo/jsonld';

export const metadata = makeMetadata('IJMB Centres in Nigeria', 'Explore IJMB study centres across Nigeria and choose a centre close to your city and budget.', '/ijmb-centres-in-nigeria');

const faqs = [
    { question: 'When should I apply?', answer: 'Apply early to secure your preferred centre and session.' },
    { question: 'Can I combine O’Level sittings?', answer: 'Yes, most IJMB centres accept up to two sittings.' },
    { question: 'Do I still need UTME?', answer: 'No, IJMB gives you a direct entry pathway into 200 level.' }
  ];

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} /><PageTemplate title="IJMB Centres in Nigeria" intro="Explore IJMB study centres across Nigeria and choose a centre close to your city and budget." points={[    'Get step-by-step support from application to admission letter.',
    'Use verified centres and approved schedules to avoid delays.',
    'Improve your admission confidence with smart academic planning.',
  ]} faqs={faqs} /></>;
}
