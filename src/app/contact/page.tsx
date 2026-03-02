import { makeMetadata } from '@/lib/seo/metadata';
import { Dropdown } from '@/components/ui/Dropdown';
import { Input } from '@/components/ui/Input';
import { Button, Container, Section } from '@/components/ui/primitives';

export const metadata = makeMetadata('Contact IJMB Advisors', 'Reach out to IJMB advisors and preview the future registration form experience.', '/contact');

export default function ContactPage() {
  return <Section><Container><h1 className="text-4xl font-bold">Contact Admission Advisors</h1><p className="mt-3 text-muted">This is a UI-only form preview. Backend integration will be added later.</p><form className="mt-8 grid gap-4 surface p-6 md:grid-cols-2"><Input placeholder="Full name" /><Input placeholder="Phone number" /><Dropdown label="Session" options={[{label:'2026/2027',value:'2026'},{label:'2027/2028',value:'2027'}]} /><Dropdown label="Centre" options={[{label:'Abuja',value:'abuja'},{label:'Lagos',value:'lagos'}]} /><Dropdown label="Subjects" options={[{label:'Science',value:'science'},{label:'Arts',value:'arts'}]} /><Dropdown label="Program type" options={[{label:'Regular',value:'regular'},{label:'Weekend',value:'weekend'}]} /><Dropdown label="Exam sittings" options={[{label:'One sitting',value:'one'},{label:'Two sittings',value:'two'}]} /><div className="flex items-end"><Button href="/ijmb-registration">Proceed to Register</Button></div></form></Container></Section>;
}
