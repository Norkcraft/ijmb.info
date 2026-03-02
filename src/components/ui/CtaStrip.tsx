import { Button, Container } from './primitives';

export function CtaStrip() {
  return <div className="bg-brand py-12 text-white"><Container><div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"><div><h3 className="text-2xl font-bold">Ready to secure 200-level admission?</h3><p>Start your IJMB registration now and get support from admission advisors.</p></div><Button href="/ijmb-registration" variant="secondary">Apply Now</Button></div></Container></div>;
}
