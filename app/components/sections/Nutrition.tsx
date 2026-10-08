import Sec from "../Sec";
import Stat from "@/app/components/Stat";

export default function Nutrition() {
  return (
    <Sec id="nutrition" n="04" label="Nutrition" title="Know what you’re eating.">
      <div className="mb-6">
        <Stat value={926000} suffix="K+" label="foods in the database" />
      </div>
      <p>Log meals your way — search, scan a barcode, or use food photo recognition — and keep track of the nutrition that matters to you.</p>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-base">
        {"Food photo scanning,Barcode scanning,Food search,Calories,Protein,Carbohydrates,Fat,Fiber,Meal planning".split(",").map(x => (
          <li key={x} className="flex items-center gap-3"><span className="size-2 bg-black" />{x}</li>
        ))}
      </ul>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/nutrition" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}