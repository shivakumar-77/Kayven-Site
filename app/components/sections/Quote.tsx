export default function Quote() {
  return (
    <section className="border-b-4 border-black">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <span className="font-display text-9xl leading-none block h-24">“</span>
        <blockquote className="font-display italic text-4xl md:text-6xl tracking-tight max-w-4xl">Your health is more than a collection of numbers.</blockquote>
        <p className="lbl mt-8">From the Kayven story</p>
      </div>
    </section>
  );
}