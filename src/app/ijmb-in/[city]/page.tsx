import { notFound } from 'next/navigation';
import { makeMetadata } from '@/lib/seo/metadata';
import { cities, displayCity } from '@/data/cities';
import { Accordion } from '@/components/ui/Accordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button, Container, Section } from '@/components/ui/primitives';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo/jsonld';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const city = displayCity(params.city);
  return makeMetadata(
    `IJMB in ${city}`,
    `Study IJMB in ${city} with trusted centres, clear requirements, fee guidance, and registration support.`,
    `/ijmb-in/${params.city}`
  );
}

export default function CityPage({ params }: { params: { city: string } }) {
  if (!cities.includes(params.city as (typeof cities)[number])) notFound();

  const city = displayCity(params.city);
  const cityPath = `/ijmb-in/${params.city}`;
  const faqs = [
    {
      question: `Where can I study IJMB in ${city}?`,
      answer: `There are partner study options and support centres available around ${city}.`
    },
    {
      question: 'What are the requirements?',
      answer: 'You need O’Level results and a matching subject combination.'
    },
    {
      question: 'How much are IJMB fees?',
      answer: 'Fees vary by centre and include tuition, materials, and admin support.'
    }
  ];
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: `IJMB in ${city}`, href: cityPath }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', item: siteConfig.url },
              { name: `IJMB in ${city}`, item: `${siteConfig.url}${cityPath}` }
            ])
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="text-4xl font-bold">IJMB in {city}</h1>
          <p className="mt-3 text-muted">
            Find trusted IJMB registration support and centre guidance in {city}.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="surface p-5">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted">
                Students in {city} choose IJMB to gain a direct entry route into 200 level
                without relying only on UTME.
              </p>
            </div>
            <div className="surface p-5">
              <h2 className="text-2xl font-semibold">How to apply</h2>
              <p className="text-muted">
                Choose your session, submit details, and confirm payment to reserve a study
                slot.
              </p>
            </div>
            <div className="surface p-5">
              <h2 className="text-2xl font-semibold">Requirements</h2>
              <p className="text-muted">
                You need relevant O’Level credits and valid personal information for onboarding.
              </p>
            </div>
            <div className="surface p-5">
              <h2 className="text-2xl font-semibold">Fees summary</h2>
              <p className="text-muted">
                Total costs depend on centre facilities and payment plan preferences.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
          <div className="mt-8">
            <Button href="/ijmb-registration">Register for IJMB</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
