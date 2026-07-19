import type { Dictionary } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";

export default function ExperienceTimeline({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow={dict.experience.eyebrow}
          heading={dict.experience.heading}
          intro={dict.experience.intro}
        />

        <div className="mt-10 grid gap-8 border-l border-line pl-6 sm:grid-cols-[auto_1fr] sm:gap-10 sm:border-l-0 sm:pl-0">
          <div className="sm:w-40 sm:shrink-0">
            <span className="stage-tag text-accent">{dict.experience.since}</span>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {dict.experience.roleTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">
              {dict.experience.roleDescription}
            </p>

            <h4 className="stage-tag mt-6 text-ink-muted">{dict.experience.tasksHeading}</h4>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {dict.experience.tasks.map((task) => (
                <li key={task} className="flex items-start gap-2 text-sm text-ink">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
