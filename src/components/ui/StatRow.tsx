export function StatRow({ stats }: { stats: { label: string; value: number }[] }) {
  return <div className="grid gap-4 md:grid-cols-3">{stats.map((s) => <div key={s.label} className="surface p-6 text-center"><p data-count data-target={s.value} className="text-3xl font-bold text-brand">0</p><p className="text-sm text-muted">{s.label}</p></div>)}</div>;
}
