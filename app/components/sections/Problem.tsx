import Sec from "../Sec";

export default function Problem() {
  return (
    <Sec id="product" n="01" label="Problem" title="Your health shouldn’t live in five different apps.">
      <p>Food in one place. Workouts somewhere else. Weight in another app. Advice scattered across the internet.</p>
      <p>People often use different tools for food tracking, calories, macros, workouts, weight, water, supplements, progress and health advice. The result is a fragmented picture of their health.</p>
      <div className="flex flex-wrap items-center gap-3 pt-4">
        {"Food app,Workout app,Weight tracker,Health info,AI chatbot".split(",").map((x, i) => (
          <span key={x} className="flex items-center gap-3"><span className="lbl border border-black px-3 py-2">{x}</span>{i < 4 && <span>+</span>}</span>
        ))}
        <span>→</span><span className="lbl bg-black text-white px-4 py-2">Kayven</span>
      </div>
      <p className="text-base">Tracking is useful. Understanding the data and turning it into action is more valuable.</p>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/product" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}