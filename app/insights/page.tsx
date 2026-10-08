import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Sec from "../components/Sec";
import Chart from "../components/Chart";
import { motion } from "framer-motion";

// Metadata for the insights page
export const metadata = {
  title: "Weekly insights, Kayven",
  description: "Understand your health patterns with Kayven's weekly insights."
};

export default function InsightsPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        label="Insights"
        headline="Weekly insights, Kayven"
        intro="Understand your health patterns with personalized weekly insights."
      />

      {/* Content Sections */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Insight Categories */}
          <Sec
            id="insight-categories"
            n="10"
            label="WEEKLY INSIGHTS"
            title="Your weekly health insights"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Nutrition Patterns */}
              <div className="border border-black rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Nutrition patterns</h3>
                <p className="text-base">
                  Understand your eating habits, meal timing, and nutritional balance over the week.
                </p>
              </div>
              {/* Macro Consistency */}
              <div className="border border-black rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Macro consistency</h3>
                <p className="text-base">
                  See how consistent your protein, carbohydrate, and fat intake is compared to your goals.
                </p>
              </div>
              {/* Workout Consistency */}
              <div className="border border-black rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Workout consistency</h3>
                <p className="text-base">
                  Track your workout frequency, duration, and intensity trends.
                </p>
              </div>
              {/* Weight Trends */}
              <div className="border border-black rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Weight trends</h3>
                <p className="text-base">
                  Monitor your weight progression and fluctuations over time.
                </p>
              </div>
              {/* Goal Progress */}
              <div className="border border-black rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Goal progress</h3>
                <p className="text-base">
                  Measure your advancement toward your health and fitness goals.
                </p>
              </div>
              {/* Habit Patterns */}
              <div className="border border-black rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Habit patterns</h3>
                <p className="text-base">
                  Identify patterns in your daily health behaviours like water intake, supplement use, and sleep.
                </p>
              </div>
            </div>
          </Sec>

          {/* Illustrative Chart */}
          <Sec
            id="illustrative-chart"
            n="10"
            label="WEEKLY INSIGHTS"
            title="Illustrative insight chart"
          >
            <Chart />
          </Sec>

          {/* Caveat */}
          <Sec
            id="insights-caveat"
            n="10"
            label="WEEKLY INSIGHTS"
            title="Important note"
          >
            <p className="mb-4">
              Insights are not medical-grade analytics and do not diagnose conditions.
            </p>
            <p className="text-base">
              Kayven's insights are designed to help you understand your health behaviours and progress,
              but they are not a substitute for professional medical advice.
            </p>
          </Sec>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand headline="Start your health journey today" />
    </>
  );
}