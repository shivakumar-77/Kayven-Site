import Sec from "../Sec";

export default function Solution() {
  return (
    <Sec n="02" label="Solution" title="Don’t just track your health. Understand it.">
      <p>Kayven is designed around a connected health ecosystem. It combines nutrition, fitness, body-weight goals, progress, water, supplements, personalised recommendations and AI-powered guidance.</p>
      <p>The product is designed to continuously learn from the information a user provides and use that context to make future recommendations more personalised.</p>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/ai" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}