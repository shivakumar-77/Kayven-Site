import Sec from "../Sec";
import Chart from "@/app/components/Chart";

export default function Insights() {
  return (
    <Sec n="07" label="Weekly insights" title="A clearer view of your week.">
      <p>Understand patterns in your nutrition, workouts and progress with weekly insights designed to help you see what is changing over time.</p>
      <figure>
        <Chart />
      </figure>
      <figcaption className="lbl mt-2">Illustrative</figcaption>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/demo" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}