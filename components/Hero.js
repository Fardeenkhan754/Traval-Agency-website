const lines = ['Every trip, sorted', 'from visa', 'to car keys.'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-lagoon text-white">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-20 430 C 300 110, 780 60, 1220 270" fill="none" stroke="#ffffff22" strokeWidth="2" strokeDasharray="4 8" />
        <path id="route" d="M-20 430 C 300 110, 780 60, 1220 270" fill="none" stroke="#F4B33E" strokeWidth="2.5" strokeLinecap="round" />
        <path id="plane" d="M14 0 L-9 -8 L-4 0 L-9 8 Z" fill="#F4B33E" transform="translate(-20 430)" />
      </svg>
      <div className="container-x relative pb-44 pt-32 md:pb-52 md:pt-44">
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
          {lines.map((l) => (
            <span key={l} className="block overflow-hidden pb-1"><span data-hero-line className="block">{l}</span></span>
          ))}
        </h1>
        <p data-hero-sub className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
          Visas, flights, hotels and cars handled by one team, so all you have to think about is packing.
        </p>
      </div>
    </section>
  );
}
