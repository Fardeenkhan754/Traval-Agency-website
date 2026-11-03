'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ResultList({ results }) {
  const ref = useRef(null);
  const [picked, setPicked] = useState({});

  useEffect(() => {
    setPicked({});
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(ref.current.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' });
    return () => tween.kill();
  }, [results]);

  if (!results) return null;
  if (!results.length) return <p className="mt-6 rounded-lg bg-sky p-4 text-sm">No matches. Try a different option.</p>;

  return (
    <ul ref={ref} className="mt-6 space-y-3" aria-live="polite">
      {results.map((r) => (
        <li key={r.id} className="flex flex-col gap-3 rounded-xl border border-ink/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="rounded-full bg-sky px-2.5 py-0.5 text-xs font-medium text-lagoon">{r.badge}</span>
            <h3 className="mt-2 font-display text-lg font-semibold">{r.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{r.meta.join('  |  ')}</p>
          </div>
          <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
            <p className="text-right"><span className="font-display text-2xl font-semibold">${r.price.toLocaleString()}</span><span className="block text-xs text-ink/50">{r.note}</span></p>
            <button className="btn !px-5 !py-2" onClick={() => setPicked((p) => ({ ...p, [r.id]: !p[r.id] }))}>
              {picked[r.id] ? 'Added to trip' : 'Add to trip'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
