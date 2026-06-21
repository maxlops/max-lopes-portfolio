import { experiences } from "../data/profile";
import { SectionReveal } from "./SectionReveal";
import { SectionTitle } from "./SectionTitle";

export function ExperienceTimeline() {
  return (
    <SectionReveal id="experiencia" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Experiência"
          title="Trajetória construída no chão da operação, com evolução para produto e dados."
          description="Da gestão de frota e equipes ao desenho de KPIs, sustentação de TMS, interface com Produto e rotinas de Customer Success."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" aria-hidden="true" />
          <div className="grid gap-5">
            {experiences.map((item) => {
              const Icon = item.icon;
              return (
                <article key={`${item.company}-${item.period}`} className="relative rounded-lg border border-border bg-white p-5 shadow-sm md:ml-14 md:p-6">
                  <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-brand-700 md:flex">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{item.period}</p>
                      <h3 className="mt-2 text-xl font-bold text-ink">{item.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-muted">{item.company}</p>
                    </div>
                    <span className="w-fit rounded-md border border-border bg-slate-50 px-3 py-1.5 text-xs font-semibold text-muted">
                      {item.segment}
                    </span>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
