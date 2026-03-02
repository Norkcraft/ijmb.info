import Link from 'next/link';
import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>;
export const Section = ({ children, className = '' }: { children: ReactNode; className?: string }) => <section className={`py-14 md:py-20 ${className}`}>{children}</section>;
export const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => <div className={`surface p-6 ${className}`}>{children}</div>;
export const Badge = ({ children }: { children: ReactNode }) => <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{children}</span>;

export const Button = ({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) => (
  <Link href={href} className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${variant === 'primary' ? 'bg-brand text-white hover:bg-brand-2' : 'border border-border bg-card text-text hover:border-brand'}`}>
    {children}
  </Link>
);
