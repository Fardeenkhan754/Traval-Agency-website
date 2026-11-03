"use client";
const cols = [
  [
    "Services",
    ["Visa services", "Flight booking", "Hotel booking", "Car rental"],
  ],
  ["Company", ["About us", "Careers", "Press", "Contact"]],
  ["Help", ["Booking terms", "Privacy", "Refunds", "FAQ"]],
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-white/70">
      <div className="container-x grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold text-white">
            Airvanta
          </p>
          <p className="mt-3 max-w-xs text-sm">
            Visas, flights, hotels and cars from one team.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex max-w-sm gap-2"
          >
            <input
              aria-label="Email for newsletter"
              type="email"
              placeholder="Your email"
              className="field !bg-white/10 !text-white placeholder:text-white/40"
            />
            <button className="btn !px-5">Join</button>
          </form>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <p className="mb-3 text-sm font-semibold text-white">{h}</p>
            <ul className="space-y-2 text-sm">
              {items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-saffron">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="container-x mt-12 border-t border-white/10 pt-6 text-xs">
        © 2026 Airvanta Travel.
      </p>
    </footer>
  );
}
