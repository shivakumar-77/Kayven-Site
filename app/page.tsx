import Pricing from "./Pricing";

const nav = ["Product", "AI", "Nutrition", "Fitness", "Pricing"];
const scenes = ["Create an account", "Set a health goal", "Complete personalisation onboarding", "Log a meal using food photo recognition", "Review calories and macros", "View personalised meal guidance", "Open a workout", "Complete the workout", "Review progress", "View weekly insights", "Interact with Kayven AI", "Receive a personalised recommendation"];
const soon = ["Blog", "Careers", "Privacy Policy", "Terms of Service"];
const foot: Record<string, string[]> = {
  Product: ["Product", "AI", "Nutrition", "Fitness", "Pricing", "Demo"],
  Company: ["About", "Team", "Contact", "Careers"],
  Resources: ["Blog", "Insights", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service"],
  Social: ["Instagram", "LinkedIn", "X"],
};

function Sec({ id, n, label, title, children }: { id?: string; n: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40 grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <div className="lg:col-span-5 min-w-0">
          <p className="lbl mb-4">{n} / {label}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl break-words">{title}</h2>
        </div>
        <div className="lg:col-span-7 min-w-0 lg:border-l lg:border-black lg:pl-12 space-y-6">{children}</div>
      </div>
    </section>
  );
}
const Big = ({ v, l }: { v: string; l: string }) => (
  <div><p className="font-display text-7xl md:text-8xl tracking-tighter leading-none">{v}</p><p className="lbl mt-3">{l}</p></div>
);

function Phone() {
  const s = { vectorEffect: "non-scaling-stroke" as const };
  return (
    <figure className="mx-auto w-full max-w-[280px]">
      <svg viewBox="0 0 200 400" fill="none" stroke="#000" strokeWidth="2" role="img" aria-label="Illustrative app interface">
        <rect x="10" y="10" width="180" height="380" {...s} /><rect x="75" y="18" width="50" height="8" {...s} />
        {[55, 100, 145].map(x => <circle key={x} cx={x} cy="90" r="24" {...s} />)}
        {[55, 100, 145].map(x => <circle key={"i" + x} cx={x} cy="90" r="14" strokeDasharray="30 60" {...s} />)}
        <rect x="28" y="150" width="144" height="46" {...s} /><line x1="38" y1="168" x2="110" y2="168" {...s} /><line x1="38" y1="182" x2="80" y2="182" {...s} />
        <rect x="28" y="208" width="144" height="46" {...s} /><line x1="38" y1="226" x2="100" y2="226" {...s} /><line x1="38" y1="240" x2="70" y2="240" {...s} />
        <polyline points="28,350 60,330 92,338 124,310 156,318 172,296" {...s} />
        <line x1="28" y1="360" x2="172" y2="360" {...s} />
      </svg>
      <figcaption className="lbl mt-3 text-center">Illustrative interface</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <header className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
          <a href="#" className="font-display text-3xl">Kayven</a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map(x => <a key={x} href={`#${x.toLowerCase()}`} className="lbl hover:underline underline-offset-4">{x}</a>)}
            <a href="#pricing" className="btn !py-3 !px-5">Get Started</a>
          </nav>
          <details className="md:hidden relative">
            <summary className="lbl cursor-pointer list-none border-2 border-black px-4 py-3">Menu</summary>
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border-2 border-black flex flex-col z-20">
              {[...nav, "Get Started"].map(x => <a key={x} href={`#${x === "Get Started" ? "pricing" : x.toLowerCase()}`} className="lbl p-4 border-b border-black last:border-0">{x}</a>)}
            </div>
          </details>
        </div>
      </header>

      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 min-w-0">
            <p className="lbl mb-6">AI-native personalised health</p>
            <h1 className="text-[clamp(3.5rem,11vw,9rem)]">Your health, understood.</h1>
            <p className="text-xl mt-8 max-w-xl">Kayven brings nutrition, fitness, progress and intelligent guidance into one personalised health ecosystem.</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#pricing" className="btn">Get Started <span>→</span></a>
              <a href="#product" className="btn out">Explore Kayven <span>→</span></a>
            </div>
            <div className="mt-16 flex items-end"><div className="size-12 border-2 border-black" /><div className="flex-1 border-t-4 border-black" /></div>
          </div>
          <div className="lg:col-span-5"><Phone /></div>
        </div>
      </section>

      <Sec id="product" n="01" label="Problem" title="Your health shouldn’t live in five different apps.">
        <p>Food in one place. Workouts somewhere else. Weight in another app. Advice scattered across the internet.</p>
        <p>People often use different tools for food tracking, calories, macros, workouts, weight, water, supplements, progress and health advice. The result is a fragmented picture of their health.</p>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {["Food app", "Workout app", "Weight tracker", "Health info", "AI chatbot"].map((x, i) => (
            <span key={x} className="flex items-center gap-3"><span className="lbl border border-black px-3 py-2">{x}</span>{i < 4 && <span>+</span>}</span>))}
          <span>→</span><span className="lbl bg-black text-white px-4 py-2">Kayven</span>
        </div>
        <p className="text-base">Tracking is useful. Understanding the data and turning it into action is more valuable.</p>
      </Sec>

      <Sec n="02" label="Solution" title="Don’t just track your health. Understand it.">
        <p>Kayven is designed around a connected health ecosystem. It combines nutrition, fitness, body-weight goals, progress, water, supplements, personalised recommendations and AI-powered guidance.</p>
        <p>The product is designed to continuously learn from the information a user provides and use that context to make future recommendations more personalised.</p>
      </Sec>

      <Sec id="ai" n="03" label="AI intelligence" title="An intelligence layer for your health.">
        <p>Kayven connects the information you choose to track with your goals and progress, helping turn daily health data into more relevant insights and recommendations.</p>
        <div className="grid sm:grid-cols-3 gap-4 pt-4">
          {[["Understands your context", "Your goals and behaviour provide the context behind your recommendations."], ["Connects the dots", "Nutrition, fitness and progress don’t exist in isolation."], ["Gets more personal", "Your experience can become more relevant as Kayven learns from your ongoing data."]].map(([t, d]) => (
            <div key={t} className="border border-black p-6 bg-white hover:bg-black hover:text-white transition-colors duration-100"><h3 className="text-2xl mb-3">{t}</h3><p className="text-base">{d}</p></div>))}
        </div>
      </Sec>

      <Sec id="nutrition" n="04" label="Nutrition" title="Know what you’re eating.">
        <Big v="926K+" l="foods in the database" />
        <p>Log meals your way — search, scan a barcode, or use food photo recognition — and keep track of the nutrition that matters to you.</p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-base">
          {["Food photo scanning", "Barcode scanning", "Food search", "Calories", "Protein", "Carbohydrates", "Fat", "Fiber", "Meal planning"].map(x => <li key={x} className="flex items-center gap-3"><span className="size-2 bg-black" />{x}</li>)}
        </ul>
      </Sec>

      <Sec id="fitness" n="05" label="Fitness" title="Train with purpose.">
        <Big v="183+" l="exercises" />
        <p>Build workouts around your goals with a growing library of exercises, structured programs and personalised fitness guidance.</p>
      </Sec>

      <Sec n="06" label="Personalisation" title="The more context Kayven has, the more personal it gets.">
        <p>Your experience becomes more relevant based on your goals, preferences, nutrition behaviour, training behaviour, progress and history.</p>
      </Sec>

      <Sec n="07" label="Weekly insights" title="A clearer view of your week.">
        <p>Understand patterns in your nutrition, workouts and progress with weekly insights designed to help you see what is changing over time.</p>
        <figure>
          <svg viewBox="0 0 400 180" fill="none" stroke="#000" strokeWidth="1.5" className="w-full max-w-lg" role="img" aria-label="Illustrative weekly chart">
            {[30, 70, 110, 150].map(y => <line key={y} x1="10" x2="390" y1={y} y2={y} stroke="#E5E5E5" style={{ vectorEffect: "non-scaling-stroke" }} />)}
            <polyline points="20,130 75,100 130,115 185,70 240,85 295,45 370,55" style={{ vectorEffect: "non-scaling-stroke" }} strokeWidth="2" />
            {[20, 75, 130, 185, 240, 295, 370].map((x, i) => <rect key={x} x={x - 3} y={[127, 97, 112, 67, 82, 42, 52][i]} width="6" height="6" fill="#000" />)}
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => <text key={d} x={[20, 75, 130, 185, 240, 295, 370][i]} y="174" fontSize="9" textAnchor="middle" fill="#000" stroke="none" fontFamily="monospace">{d}</text>)}
          </svg>
          <figcaption className="lbl mt-2">Illustrative</figcaption>
        </figure>
      </Sec>

      <Sec n="08" label="Product demo" title="One user’s journey.">
        <ol className="grid sm:grid-cols-2 gap-px bg-black border border-black">
          {scenes.map((s, i) => <li key={s} className="bg-white p-5 hover:bg-black hover:text-white"><span className="lbl block mb-2">{String(i + 1).padStart(2, "0")}</span><span className="text-base">{s}</span></li>)}
        </ol>
      </Sec>

      <section className="dark relative bg-black text-white border-b-4 border-black overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg,transparent,transparent 1px,#fff 1px,#fff 2px)", backgroundSize: "4px 100%" }} />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32 grid sm:grid-cols-2 gap-16">
          <Big v="926K+" l="foods in the database" /><Big v="183+" l="exercises" />
        </div>
      </section>

      <Sec id="pricing" n="09" label="Pricing" title="Choose your plan.">
        <p>Kayven has a free tier alongside paid plans.</p>
      </Sec>
      <section className="border-b-4 border-black -mt-4"><div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24"><Pricing /></div></section>

      <section className="border-b-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
          <span className="font-display text-9xl leading-none block h-24">“</span>
          <blockquote className="font-display italic text-4xl md:text-6xl tracking-tight max-w-4xl">Your health is more than a collection of numbers.</blockquote>
          <p className="lbl mt-8">From the Kayven story</p>
        </div>
      </section>

      <Sec n="10" label="Vision" title="Build the personal health layer.">
        <p>Kayven’s long-term vision is to become a personalised health intelligence layer that helps people understand their health data and make better everyday decisions.</p>
        <p className="text-base">Future areas such as lab data and doctor consultations are coming soon. Kayven is a health and wellness platform and does not diagnose conditions or replace professional care.</p>
      </Sec>

      <section className="dark relative bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-28 md:py-36 text-center">
          <h2 className="text-5xl md:text-7xl">Your health, understood.</h2>
          <a href="#pricing" className="btn mt-10">Get Started <span>→</span></a>
        </div>
      </section>

      <footer className="border-t-4 border-black">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {Object.entries(foot).map(([h, items]) => (
            <div key={h}><p className="lbl mb-4">{h}</p><ul className="space-y-2 text-base">
              {items.map(x => <li key={x}><a href={`#${x.toLowerCase()}`} className="hover:underline">{x}</a>{soon.includes(x) && <span className="lbl ml-2 border border-black px-1.5 py-0.5 whitespace-nowrap !text-[10px]">Coming soon</span>}</li>)}
            </ul></div>))}
        </div>
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 pb-12 text-base"><p>Your health, understood.</p><p className="lbl mt-2">© 2026 Kayven. All rights reserved.</p></div>
      </footer>
    </main>
  );
}
