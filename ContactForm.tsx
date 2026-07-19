interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <p className="stage-tag text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {heading}
      </h2>
      {intro ? <p className="mt-4 text-ink-muted leading-relaxed">{intro}</p> : null}
    </div>
  );
}
