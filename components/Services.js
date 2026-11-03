import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="container-x scroll-mt-16 py-24 md:py-32">
      <h2 data-reveal className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">Four services, one booking desk</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.id} data-reveal data-hover className={`${s.tint} flex flex-col justify-between rounded-2xl border border-ink/10 p-7 md:p-9`}>
            <div>
              <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-ink/70">{s.text}</p>
            </div>
            <ServiceLink id={s.id} />
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceLink({ id }) {
  return (
    <a
      href="#search"
      data-service={id}
      className="mt-8 inline-block w-fit border-b-2 border-ink pb-0.5 text-sm font-semibold hover:border-saffron"
    >
      Search {id === 'cars' ? 'car rental' : id}
    </a>
  );
}
