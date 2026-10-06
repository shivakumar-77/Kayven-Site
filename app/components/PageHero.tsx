import Reveal from "./motion/Reveal";

interface PageHeroProps {
  label: string;
  headline: string;
  intro: string;
  className?: string;
}

export default function PageHero({
  label,
  headline,
  intro,
  className = ""
}: PageHeroProps) {
  return (
    <section className={`mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pt-16 md:pt-24 pb-16 md:pb-24 ${className}`}>
      <p className="lbl mb-6">{label}</p>
      <Reveal className="text-[clamp(3.5rem,11vw,7rem)]">
        <h1>{headline}</h1>
      </Reveal>
      <p className="text-xl mt-8 max-w-2xl">{intro}</p>
    </section>
  );
}