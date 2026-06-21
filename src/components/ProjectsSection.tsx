import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionReveal } from "./SectionReveal";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection() {
  return (
    <SectionReveal id="projetos" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Projetos"
          title="Cases preparados para mostrar raciocínio de produto aplicado à logística."
          description="A estrutura já está pronta para evoluir cada projeto em estudo público, com contexto, problema, hipótese, processo, solução proposta e aprendizados."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
