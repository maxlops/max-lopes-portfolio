import type { LucideIcon } from "lucide-react";

type StudyCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function StudyCard({ title, description, icon: Icon }: StudyCardProps) {
  return (
    <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
