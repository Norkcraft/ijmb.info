import Link from 'next/link';
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return <nav className="mb-6 text-sm text-muted">{items.map((it, i) => <span key={it.href}>{i > 0 ? ' / ' : ''}<Link href={it.href}>{it.label}</Link></span>)}</nav>;
}
