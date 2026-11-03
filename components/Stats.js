import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-deep py-16 text-white md:py-20">
      <dl className="container-x grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="font-display text-5xl font-semibold text-saffron md:text-6xl">
              <span data-count={s.value} data-suffix={s.suffix}>
                0{s.suffix}
              </span>
            </dd>
            <dt className="mt-2 text-sm text-white/70">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
