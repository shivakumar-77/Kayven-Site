"use client";

export default function Chart() {
  return (
    <figure>
      <svg viewBox="0 0 400 180" fill="none" stroke="#000" strokeWidth="1.5" className="w-full max-w-lg" role="img" aria-label="Illustrative weekly chart">
        {[30, 70, 110, 150].map(y => (
          <line
            key={y}
            x1="10"
            x2="390"
            y1={y}
            y2={y}
            stroke="#E5E5E5"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        ))}
        <polyline
          points="20,130 75,100 130,115 185,70 240,85 295,45 370,55"
          style={{ vectorEffect: "non-scaling-stroke" }}
          strokeWidth="2"
        />
        {[20, 75, 130, 185, 240, 295, 370].map((x, i) => (
          <rect
            key={x}
            x={x - 3}
            y={[127, 97, 112, 67, 82, 42, 52][i]}
            width="6"
            height="6"
            fill="#000"
          />
        ))}
        {"Mon,Tue,Wed,Thu,Fri,Sat,Sun".split(",").map((d, i) => (
          <text
            key={d}
            x={[20, 75, 130, 185, 240, 295, 370][i]}
            y="174"
            fontSize="9"
            textAnchor="middle"
            fill="#000"
            stroke="none"
            fontFamily="monospace"
          >
            {d}
          </text>
        ))}
      </svg>
      <figcaption className="lbl mt-2">Illustrative</figcaption>
    </figure>
  );
}