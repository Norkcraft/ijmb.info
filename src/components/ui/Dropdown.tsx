import { SelectHTMLAttributes } from 'react';

type Opt = { label: string; value: string };
export function Dropdown({ label, options, ...props }: { label: string; options: Opt[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  return <label className="block text-sm font-medium">{label}<select {...props} className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm">{options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select></label>;
}
