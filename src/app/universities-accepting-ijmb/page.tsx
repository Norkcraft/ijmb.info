import { makeMetadata } from '@/lib/seo/metadata';
import { universities } from '@/data/universities';
import { Button, Container, Section } from '@/components/ui/primitives';
import { Accordion } from '@/components/ui/Accordion';

export const metadata = makeMetadata('Universities Accepting IJMB in Nigeria', 'Browse IJMB-accepting universities grouped by federal, state, and private institutions.', '/universities-accepting-ijmb');

const grouped = {
  Federal: universities.filter((u) => u.type === 'Federal'),
  State: universities.filter((u) => u.type === 'State'),
  Private: universities.filter((u) => u.type === 'Private')
};

export default function UniversitiesPage() {
  return <Section><Container><h1 className="text-4xl font-bold">Universities Accepting IJMB</h1><p className="mt-3 text-muted">Use this list to plan your preferred institution and course pathway.</p><div className="mt-8 grid gap-6 md:grid-cols-3">{Object.entries(grouped).map(([type, list]) => <div className="surface p-5" key={type}><h2 className="text-xl font-semibold">{type} Universities</h2><ul className="mt-3 space-y-2 text-sm text-muted">{list.map((u) => <li key={u.name}>{u.name}</li>)}</ul></div>)}</div><div className="mt-8"><Accordion items={[{ question: 'Is this list exhaustive?', answer: 'No. Acceptance varies by course and yearly policy updates.' },{ question: 'Can I switch institution later?', answer: 'Yes, subject to Direct Entry and school-specific policies.' }]} /></div><div className="mt-8"><Button href="/ijmb-registration">Start Registration</Button></div></Container></Section>;
}
