import { Accordion } from '@/components/ui/Accordion';
import { CtaStrip } from '@/components/ui/CtaStrip';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { StatRow } from '@/components/ui/StatRow';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Badge, Button, Card, Container, Section } from '@/components/ui/primitives';
import { assets } from '@/lib/assets';
import { faqJsonLd } from '@/lib/seo/jsonld';
import { HomeAnimations } from '@/components/sections/HomeAnimations';

const faqs = [
  { question: 'Can IJMB really secure 200 level admission?', answer: 'Yes. IJMB is accepted for direct entry in many Nigerian universities.' },
  { question: 'How long is the programme?', answer: 'The standard IJMB academic session runs for about 9 to 12 months.' },
  { question: 'Can science, art, and commercial students apply?', answer: 'Yes, available subject combinations support all major streams.' }
];

export default function Home() {
  return (
    <>
      <HomeAnimations />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <Section><Container><div className="grid items-center gap-10 md:grid-cols-2"><div data-hero><Badge>Direct Entry Pathway</Badge><h1 className="mt-4 text-5xl font-bold">Gain Admission into 200 Level Without UTME</h1><p className="mt-4 text-muted">Build a stronger admission path through IJMB with expert registration support, approved centres, and clear guidance from start to finish.</p><div className="mt-6 flex gap-3"><Button href="/ijmb-registration">Start Registration</Button><Button href="/ijmb-vs-jamb" variant="secondary">Compare IJMB vs JAMB</Button></div></div><ImageWithFallback src={assets.hero.students} alt="IJMB students in campus" width={1200} height={800} priority sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full rounded-2xl border border-border object-cover" /></div></Container></Section>
      <Section className="bg-card"><Container><h2 className="text-3xl font-bold">What is IJMB</h2><p className="mt-3 text-muted">IJMB is an advanced level programme that qualifies eligible candidates for Direct Entry admission into 200 level across participating universities.</p></Container></Section>
      <Section><Container><h2 className="text-3xl font-bold">Why IJMB works better than UTME</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{['Lower pressure than one-day exams','Direct entry route into 200 level','Flexible subject combinations'].map((item) => <Card key={item} data-reveal>{item}</Card>)}</div></Container></Section>
      <Section className="bg-card"><Container><h2 className="text-3xl font-bold">How to register (3 steps)</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{['Choose your preferred session and centre','Submit bio-data and O’Level details','Confirm payment and receive onboarding'].map((item, idx) => <Card key={item}><p className="text-brand font-bold">Step {idx + 1}</p><p>{item}</p></Card>)}</div></Container></Section>
      <Section><Container><h2 className="mb-6 text-3xl font-bold">Success statistics</h2><StatRow stats={[{ label: 'Candidates coached yearly', value: 12000 },{ label: 'Admission support centres', value: 38 },{ label: 'Average successful placements', value: 87 }]} /></Container></Section>
      <Section className="bg-card"><Container><h2 className="text-3xl font-bold">Centres overview</h2><p className="mt-3 text-muted">Find reliable centres in major Nigerian cities with quality tutors and student support.</p></Container></Section>
      <Section><Container><h2 className="text-3xl font-bold">Universities overview</h2><p className="mt-3 text-muted">Explore federal, state, and private universities that accept IJMB for direct entry admission.</p><div className="mt-4"><Button href="/universities-accepting-ijmb">View Universities</Button></div></Container></Section>
      <Section className="bg-card"><Container><h2 className="mb-6 text-3xl font-bold">Testimonials</h2><div className="grid gap-4 md:grid-cols-3"><TestimonialCard name="Hafsat, Ilorin" quote="IJMB gave me a second chance and I entered 200 level confidently." /><TestimonialCard name="Emeka, Enugu" quote="The support team made registration and centre selection straightforward." /><TestimonialCard name="Amina, Abuja" quote="I avoided UTME pressure and focused on steady academic preparation." /></div></Container></Section>
      <Section><Container><h2 className="mb-5 text-3xl font-bold">FAQ Preview</h2><Accordion items={faqs} /></Container></Section>
      <CtaStrip />
    </>
  );
}
