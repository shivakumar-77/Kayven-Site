export default function PrivacyNotice() {
  return (
    <details className="privacy-details fixed bottom-4 right-4 z-[60]">
      <summary className="privacy-summary flex min-h-11 cursor-pointer list-none items-center rounded-full border border-[#e8e7f0] bg-white px-4 py-2 text-sm font-semibold text-[#4543dd] shadow-lg transition-colors hover:bg-[#efeeff]">
        Privacy info
      </summary>
      <aside
        aria-label="Privacy information"
        className="privacy-panel absolute bottom-full right-0 mb-3 hidden w-[min(28rem,calc(100vw-2rem))] rounded-2xl border border-[#e8e7f0] bg-white p-5 shadow-xl"
      >
        <p className="font-semibold text-[#151526]">Privacy on this website</p>
        <p className="mt-2 text-sm leading-6 text-[#68687d]">
          Find information about data used by this website and Kayven
          services, and the choices available to you, in our{" "}
          <a className="font-semibold text-[#4543dd] underline underline-offset-2" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>
      </aside>
    </details>
  );
}
