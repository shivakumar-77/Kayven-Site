import Sec from "../Sec";
import Stat from "@/app/components/Stat";

export default function Fitness() {
  return (
    <Sec id="fitness" n="05" label="Fitness" title="Train with purpose.">
      <div className="mb-6">
        <Stat value={183} suffix="+" label="exercises" />
      </div>
      <p>Build workouts around your goals with a growing library of exercises, structured programs and personalised fitness guidance.</p>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/fitness" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}