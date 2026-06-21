import { Download, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { Button } from "./ui/button";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#estudos", label: "Estudos" },
  { href: "#curriculo", label: "Currículo" },
  { href: "#contato", label: "Contato" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-sm font-bold text-white">
            ML
          </span>
          <span className="hidden text-sm font-bold text-ink sm:inline">Max Lopes</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="#projetos" variant="secondary" size="sm">
            Ver projetos
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" size="sm" download>
            <Download className="h-4 w-4" aria-hidden="true" />
            Currículo
          </Button>
          <Button href={profile.linkedinUrl} variant="dark" size="sm" external>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-4" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted hover:bg-slate-100 hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              <Button href="#projetos" variant="secondary" onClick={() => setOpen(false)}>
                Ver projetos
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                Currículo
              </Button>
              <Button href={profile.linkedinUrl} variant="dark" external>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
