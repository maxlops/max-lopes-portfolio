import { Download, FileText } from "lucide-react";
import { profile } from "../data/profile";
import { Button } from "./ui/button";
import { SectionReveal } from "./SectionReveal";
import { SectionTitle } from "./SectionTitle";

export function ResumeSection() {
  return (
    <SectionReveal id="curriculo" className="border-y border-border bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Currículo"
          title="Currículo para leitura rápida, entrevista e encaminhamento."
          description="Baixe a versão atual em PDF. A estrutura do site já deixa espaço para incluir uma versão ATS separada quando ela estiver pronta."
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <FileText className="h-8 w-8 text-blue-200" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold">Currículo executivo</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Versão atual com trajetória, projetos, formação, ferramentas e contatos.
            </p>
            <Button href={profile.resumeUrl} className="mt-5" variant="default" download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar PDF
            </Button>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <FileText className="h-8 w-8 text-slate-300" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold">Currículo ATS</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Espaço reservado para uma versão otimizada para sistemas de recrutamento.
            </p>
            <Button className="mt-5" variant="secondary" disabled>
              Em preparação
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
