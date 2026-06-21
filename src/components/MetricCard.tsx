import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

export function MetricCard({ label, value, detail, icon: Icon }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
      <strong className="mt-2 block text-2xl font-bold text-ink">{value}</strong>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </article>
  );
}
