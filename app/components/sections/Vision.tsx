import Sec from "../Sec";

export default function Vision() {
  return (
    <Sec n="10" label="Vision" title="Build the personal health layer.">
      <p>Kayven’s long-term vision is to become a personalised health intelligence layer that helps people understand their health data and make better everyday decisions.</p>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}