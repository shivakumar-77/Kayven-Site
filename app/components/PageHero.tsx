"use client";
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
    <section className={className}>
      <p className="lbl mb-6">{label}</p>
      <Reveal className="text-[clamp(3.5rem,11vw,7rem)]">
        <h1>{headline}</h1>
      </Reveal>
      <p className="text-xl mt-8 max-w-xl">{intro}</p>
    </section>
  );
}