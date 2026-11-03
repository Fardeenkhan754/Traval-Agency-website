'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// One place for all page-level GSAP: hero timeline, scroll reveals, counters, hover effects.
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Service links: switch the search tab, then scroll to it.
    const links = [...document.querySelectorAll('[data-service]')];
    const onLink = (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('select-tab', { detail: e.currentTarget.dataset.service }));
      document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
    };
    links.forEach((l) => l.addEventListener('click', onLink));

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero: masked headline lines, subtitle, search card, and the plane flying its route.
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-line]', { yPercent: 110, duration: 1, stagger: 0.12 })
        .from('[data-hero-sub]', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from('[data-hero-card]', { y: 60, opacity: 0, duration: 0.9 }, '-=0.6');

      const path = document.querySelector('#route');
      const plane = document.querySelector('#plane');
      if (path && plane) {
        const len = path.getTotalLength();
        const o = { p: 0 };
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(o, {
          p: 1, duration: 3.2, delay: 0.3, ease: 'power2.inOut',
          onUpdate() {
            const a = path.getPointAtLength(o.p * len);
            const b = path.getPointAtLength(Math.min(len, o.p * len + 1));
            plane.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${(Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI})`);
            path.style.strokeDashoffset = len * (1 - o.p);
          },
        });
      }

      // Scroll reveals
      gsap.set('[data-reveal]', { opacity: 0, y: 40 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%', once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: true }),
      });

      // Counters
      document.querySelectorAll('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const o = { v: 0 };
        ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: () => gsap.to(o, { v: end, duration: 2, ease: 'power1.out', onUpdate: () => { el.textContent = Math.round(o.v).toLocaleString() + suffix; } }),
        });
      });

      // Hover effects: lift cards, zoom destination backgrounds
      const cleanups = [...document.querySelectorAll('[data-hover]')].map((el) => {
        const zoom = el.querySelector('[data-zoom]');
        const over = () => { gsap.to(el, { y: -6, duration: 0.3 }); if (zoom) gsap.to(zoom, { scale: 1.08, duration: 0.6 }); };
        const out = () => { gsap.to(el, { y: 0, duration: 0.3 }); if (zoom) gsap.to(zoom, { scale: 1, duration: 0.6 }); };
        el.addEventListener('mouseenter', over);
        el.addEventListener('mouseleave', out);
        return () => { el.removeEventListener('mouseenter', over); el.removeEventListener('mouseleave', out); };
      });
      return () => cleanups.forEach((c) => c());
    });

    return () => { mm.revert(); links.forEach((l) => l.removeEventListener('click', onLink)); };
  }, []);

  return null;
}
