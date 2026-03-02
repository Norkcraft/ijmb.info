import Link from 'next/link';
import { assets } from '@/lib/assets';
import { Container, Button } from './primitives';
import { ImageWithFallback } from './ImageWithFallback';

const nav = [
  ['Registration', '/ijmb-registration'],
  ['Requirements', '/ijmb-admission-requirements'],
  ['Fees', '/ijmb-fees'],
  ['Centres', '/ijmb-centres-in-nigeria'],
  ['FAQ', '/faq']
];

export function Header() {
  return (
    <header className="border-b border-border bg-card/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <ImageWithFallback src={assets.logo.main} alt="IJMB logo" width={44} height={44} />
            <span>IJMB</span>
          </Link>
          <nav className="hidden gap-5 text-sm md:flex">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm">
              Login
            </Link>
            <Button href="/ijmb-registration">Register</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
