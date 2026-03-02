import { Accordion } from '@/components/ui/Accordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button, Container, Section } from '@/components/ui/primitives';

export function PageTemplate({ title, intro, points, faqs }: { title: string; intro: string; points: string[]; faqs: { question: string; answer: string }[] }) {
  return (
    <>
      <Section className="pb-6"><Container><Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: title, href: '#' }]} /><h1 className="text-4xl font-bold">{title}</h1><p className="mt-3 max-w-3xl text-muted">{intro}</p></Container></Section>
      <Section><Container><div className="grid gap-3">{points.map((p) => <div key={p} className="surface p-4">{p}</div>)}</div><div className="mt-6 flex gap-3"><Button href="/ijmb-registration">Start Registration</Button><Button href="/contact" variant="secondary">Talk to Advisor</Button></div></Container></Section>
      <Section><Container><h2 className="mb-4 text-2xl font-semibold">Frequently Asked Questions</h2><Accordion items={faqs} /></Container></Section>
    </>
  );
}
