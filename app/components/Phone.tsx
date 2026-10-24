"use client";

export default function Phone() {
  const s = { vectorEffect: "non-scaling-stroke" as const };
  return (
    <figure className="mx-auto w-full max-w-[280px]">
      <svg className="h-auto w-full" viewBox="0 0 200 400" fill="none" stroke="#000" strokeWidth="2" role="img" aria-label="Illustrative app interface">
        <rect x="10" y="10" width="180" height="380" {...s} /><rect x="75" y="18" width="50" height="8" {...s} />
        {[55, 100, 145].map(x => <circle key={x} cx={x} cy="90" r="24" {...s} />)}
        {[55, 100, 145].map(x => <circle key={"i" + x} cx={x} cy="90" r="14" strokeDasharray="30 60" {...s} />)}
        <rect x="28" y="150" width="144" height="46" {...s} /><line x1="38" y1="168" x2="110" y2="168" {...s} /><line x1="38" y1="182" x2="80" y2="182" {...s} />
        <rect x="28" y="208" width="144" height="46" {...s} /><line x1="38" y1="226" x2="100" y2="226" {...s} /><line x1="38" y1="240" x2="70" y2="240" {...s} />
        <polyline points="28,350 60,330 92,338 124,310 156,318 172,296" {...s} />
        <line x1="28" y1="360" x2="172" y2="360" {...s} />
      </svg>
      <figcaption className="lbl mt-3 text-center">Illustrative interface</figcaption>
    </figure>
  );
}