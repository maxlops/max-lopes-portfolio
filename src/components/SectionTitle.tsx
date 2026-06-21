type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
