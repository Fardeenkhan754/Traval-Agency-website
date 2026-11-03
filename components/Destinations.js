import { destinations } from '@/lib/data';

export default function Destinations() {
  return (
    <section id="destinations" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="container-x">
        <h2 data-reveal className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">Popular right now</h2>
        <p data-reveal className="mt-4 max-w-md text-ink/70">Return flights from $, based on this month’s fares.</p>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <a key={d.city} href="#search" data-reveal data-hover className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl p-6 text-white ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} ${i === 3 ? 'lg:col-span-2' : ''}`}>
              <div data-zoom className={`absolute inset-0 bg-gradient-to-br ${d.bg}`}>
                {d.image && <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${d.image})` }} />}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="relative">
                <p className="text-sm text-white/80">{d.country}</p>
                <h3 className={`font-display font-semibold ${i === 0 ? 'text-5xl' : 'text-3xl'}`}>{d.city}</h3>
                <p className="mt-1 text-sm">from ${d.from}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
