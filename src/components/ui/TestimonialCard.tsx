import { Card } from './primitives';
export function TestimonialCard({ name, quote }: { name: string; quote: string }) { return <Card><p className="text-muted">“{quote}”</p><p className="mt-3 font-semibold">— {name}</p></Card>; }
