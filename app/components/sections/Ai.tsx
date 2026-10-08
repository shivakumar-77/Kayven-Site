import Sec from "../Sec";

export default function Ai() {
  return (
    <Sec id="ai" n="03" label="AI intelligence" title="An intelligence layer for your health.">
      <p>Kayven connects the information you choose to track with your goals and progress, helping turn daily health data into more relevant insights and recommendations.</p>
      <div className="grid sm:grid-cols-3 gap-4 pt-4">
        {"Understands your context|Your goals and behaviour provide the context behind your recommendations.,Connects the dots|Nutrition, fitness and progress don’t exist in isolation.,Gets more personal|Your experience can become more relevant as Kayven learns from your ongoing data.".split(",").map((x, i) => {
          const [t, d] = x.split("|");
          return (
            <div key={i} className="border border-black p-6 bg-white hover:bg-black hover:text-white transition-colors duration-100">
              <h3 className="text-2xl mb-3">{t}</h3>
              <p className="text-base">{d}</p>
            </div>
          );
        })}
      </div>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/ai" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}