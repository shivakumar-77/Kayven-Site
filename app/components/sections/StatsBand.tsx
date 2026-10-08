import Stat from "@/app/components/Stat";

export default function StatsBand() {
  return (
    <section className="bg-black text-white border-b-4 border-black">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        {/* Background pattern */}
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg,transparent,transparent 1px,#fff 1px,#fff 2px)", backgroundSize: "4px 100%" }} />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 grid sm:grid-cols-2 gap-16">
          <div>
            <Stat value={926000} suffix="K+" label="foods in the database" />
          </div>
          <div>
            <Stat value={183} suffix="+" label="exercises" />
          </div>
        </div>
      </div>
    </section>
  );
}