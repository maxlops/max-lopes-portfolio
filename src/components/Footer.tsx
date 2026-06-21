import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. Product Operations, Logística, Dados e IA.</p>
        <p>Transformo operação em processo, dado e produto.</p>
      </div>
    </footer>
  );
}
