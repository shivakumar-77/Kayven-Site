import Sec from "../Sec";

export default function Personalisation() {
  return (
    <Sec n="06" label="Personalisation" title="The more context Kayven has, the more personal it gets.">
      <p>Your experience becomes more relevant based on your goals, preferences, nutrition behaviour, training behaviour, progress and history.</p>
      {/* Learn more link - Personalisation doesn't have a dedicated page, so linking to Product */}
      <div className="mt-6">
        <a href="/product" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}