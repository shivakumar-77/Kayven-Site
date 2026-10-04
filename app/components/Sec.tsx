import DrawRule from "./motion/DrawRule";
import Reveal from "./motion/Reveal";

interface SecProps {
  id?: string;
  n: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function Sec({
  id,
  n,
  label,
  title,
  children
}: SecProps) {
  return (
    <section id={id} className="border-b-4 border-black">
      <DrawRule className="h-4 border-t-4 border-black" />
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40 grid lg:grid-cols-7 gap-x-12 gap-y-10">
        <div className="lg:col-span-3 min-w-0 lg:sticky lg:top-24">
          <p className="lbl mb-4">{n} / {label}</p>
          <Reveal className="text-4xl md:text-5xl lg:text-6xl break-words">
            <h2>{title}</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-4 min-w-0 lg:border-l lg:border-black lg:pl-12 space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}