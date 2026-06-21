import { ExternalLink, Mail, MessageCircle, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { Button } from "./ui/button";
import { SectionReveal } from "./SectionReveal";

const contacts = [
  {
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maximo-lopes",
    href: profile.linkedinUrl,
    icon: ExternalLink
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: profile.whatsappUrl,
    icon: MessageCircle
  }
];

export function ContactSection() {
  return (
    <SectionReveal id="contato" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 rounded-lg border border-border bg-slate-50 p-6 md:grid-cols-[1fr_0.9fr] md:p-8 lg:p-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Contato</p>
            <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">Vamos conversar sobre produto, operação e dados.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Estou aberto a conversas sobre Product Operations, Produto, Logtechs, Dados, Customer Success e tecnologia
              aplicada à logística.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-muted">
              <MapPin className="h-4 w-4 text-brand-700" aria-hidden="true" />
              {profile.location}
            </div>
          </div>

          <div className="grid gap-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-lg border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-ink">{contact.label}</span>
                    <span className="block break-words text-sm text-muted">{contact.value}</span>
                  </span>
                </a>
              );
            })}
            <Button href={`mailto:${profile.email}`} size="lg" className="mt-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Falar comigo
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
