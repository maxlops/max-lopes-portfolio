import type { LucideIcon } from "lucide-react";

type SkillBadgeProps = {
  label: string;
  icon?: LucideIcon;
};

export function SkillBadge({ label, icon: Icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink">
      {Icon ? <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" /> : null}
      {label}
    </span>
  );
}
