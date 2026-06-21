import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "../data/projects";
import { Button } from "./ui/button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{project.category}</p>
          <h3 className="mt-2 text-xl font-bold leading-tight text-ink">{project.title}</h3>
        </div>
        <span className="shrink-0 rounded-md bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-700">
          {project.status}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-border bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <Button variant="secondary" size="sm" disabled>
          <Lock className="h-4 w-4" aria-hidden="true" />
          Ver estudo
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
