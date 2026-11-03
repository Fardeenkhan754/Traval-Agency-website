import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [lead, ...rest] = testimonials;
  return (
    <section id="reviews" className="container-x scroll-mt-16 py-24 md:py-32">
      <h2 data-reveal className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">Travellers who just got back</h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        <figure data-reveal className="rounded-2xl bg-lagoon p-8 text-white lg:col-span-3 lg:p-12">
          <blockquote className="font-display text-2xl leading-snug md:text-3xl">“{lead.quote}”</blockquote>
          <figcaption className="mt-8 text-sm text-white/70"><strong className="text-white">{lead.name}</strong>, {lead.role}</figcaption>
        </figure>
        <div className="grid gap-5 lg:col-span-2">
          {rest.map((t) => (
            <figure key={t.name} data-reveal data-hover className="rounded-2xl border border-ink/10 bg-white p-7">
              <blockquote className="leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-ink/60"><strong className="text-ink">{t.name}</strong>, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
