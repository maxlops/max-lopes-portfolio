import { education, pillars, profile, tools } from "../data/profile";
import { SectionReveal } from "./SectionReveal";
import { SectionTitle } from "./SectionTitle";
import { SkillBadge } from "./SkillBadge";

export function AboutSection() {
  return (
    <SectionReveal id="sobre" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Sobre"
          title="Operação real, visão de produto e leitura de dados no mesmo repertório."
          description="Minha trajetória começou na operação logística, evoluiu para gestão, dados, atendimento ao cliente e produto. Hoje atuo na interseção entre negócio, tecnologia e operação, traduzindo problemas reais de transporte em processos, indicadores, requisitos e soluções escaláveis."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-border bg-white p-6 shadow-sm md:p-8">
            <p className="text-lg leading-8 text-muted">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <SkillBadge key={pillar.label} label={pillar.label} icon={pillar.icon} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-ink">Formação</h3>
              <div className="mt-5 grid gap-4">
                {education.map((item) => (
                  <div key={item.course} className="border-l-2 border-brand-500 pl-4">
                    <p className="font-semibold text-ink">{item.course}</p>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution} · {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-ink">Ferramentas e repertório</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
