import Sec from "@/app/components/Sec";
import { motion } from "framer-motion";
import Reveal from "@/app/components/motion/Reveal";

export default function Demo() {
  const scenes = [
    "Create an account",
    "Set a health goal",
    "Complete personalisation onboarding",
    "Log a meal using food photo recognition",
    "Review calories and macros",
    "View personalised meal guidance",
    "Open a workout",
    "Complete the workout",
    "Review progress",
    "View weekly insights",
    "Interact with Kayven AI",
    "Receive a personalised recommendation"
  ];

  return (
    <Sec n="08" label="Product demo" title="One user’s journey.">
      <ol className="grid sm:grid-cols-2 gap-px bg-black border border-black">
        {scenes.map((s, i) => (
          <Reveal key={s} className="bg-white p-5 hover:bg-black hover:text-white" delay={i * 0.04}>
            <li>
              <span className="lbl block mb-2">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base">{s}</span>
            </li>
          </Reveal>
        ))}
      </ol>
      {/* Learn more link */}
      <div className="mt-6">
        <a href="/demo" className="lbl hover:underline">Learn more →</a>
      </div>
    </Sec>
  );
}