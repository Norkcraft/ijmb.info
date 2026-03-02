'use client';
import { useState } from 'react';

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="space-y-3">{items.map((item, i) => <div key={item.question} className="surface p-4"><button className="w-full text-left font-semibold" onClick={() => setOpen(open === i ? null : i)}>{item.question}</button>{open === i && <p className="mt-2 text-muted">{item.answer}</p>}</div>)}</div>;
}
