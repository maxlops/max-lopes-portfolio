import { studies } from "../data/profile";
import { SectionReveal } from "./SectionReveal";
import { SectionTitle } from "./SectionTitle";
import { StudyCard } from "./StudyCard";

export function StudiesSection() {
  return (
    <SectionReveal id="estudos" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Estudos"
          title="Aprendizados conectados ao que a operação precisa resolver."
          description="O foco é evoluir de forma prática: dados para decisão, produto para clareza de solução e IA para ganhar velocidade sem perder critério."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <StudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
