import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { metrics, profile } from "../data/profile";
import { Button } from "./ui/button";
import { MetricCard } from "./MetricCard";

export function HeroSection() {
  return (
    <section id="inicio" className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="mb-5 inline-flex max-w-full items-start gap-2 rounded-md border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-900">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{profile.headline}</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            Transformando operações logísticas com dados e expertise de campo.
          </h1>
          <p className="mt-6 max-w-2xl text-left text-base leading-7 text-muted md:text-justify md:text-lg md:leading-8">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projetos" size="lg">
              Ver projetos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={profile.resumeUrl} variant="secondary" size="lg" download>
              <Download className="h-4 w-4" aria-hidden="true" />
              Baixar currículo
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" size="lg">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Falar comigo
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="overflow-hidden rounded-lg border border-border bg-slate-950 shadow-soft">
            <img
              src="/images/operations-dashboard-hero.png"
              alt="Painéis de operação logística, mapa de rotas e indicadores em ambiente executivo"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
