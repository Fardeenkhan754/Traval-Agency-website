'use client';
import { useEffect, useState } from 'react';
import ResultList from './ResultList';
import {
  cities, carTypes, visaCountries, visaTypes,
  searchFlights, searchHotels, searchCars, searchVisa,
} from '@/lib/data';

const tabs = [['visa', 'Visa'], ['flights', 'Flights'], ['hotels', 'Hotels'], ['cars', 'Car rental']];
const today = () => new Date().toISOString().slice(0, 10);

function Field({ label, children, className = '' }) {
  return (
    <label className={className}>
      <span className="label">{label}</span>
      {children}
    </label>
  );
}
const Select = ({ name, options, defaultValue }) => (
  <select name={name} defaultValue={defaultValue} className="field">
    {options.map((o) => <option key={o}>{o}</option>)}
  </select>
);

export default function SearchTabs() {
  const [tab, setTab] = useState('flights');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const handler = (e) => { setTab(e.detail); setResults(null); setError(''); };
    window.addEventListener('select-tab', handler);
    return () => window.removeEventListener('select-tab', handler);
  }, []);

  const switchTab = (id) => { setTab(id); setResults(null); setError(''); };

  const onSubmit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    setError('');
    if (tab === 'visa') return setResults(searchVisa({ country: f.country, type: f.type }));
    if (tab === 'flights') {
      if (f.from === f.to) return setError('Choose different departure and arrival cities.');
      return setResults(searchFlights({ from: f.from, to: f.to, date: f.date, pax: Number(f.pax) }));
    }
    if (tab === 'hotels') {
      const nights = Math.round((new Date(f.out) - new Date(f.in)) / 864e5);
      if (!(nights > 0)) return setError('Check-out must be after check-in.');
      return setResults(searchHotels({ city: f.city, nights, guests: Number(f.guests) }));
    }
    setResults(searchCars({ city: f.city, days: Number(f.days), type: f.type }));
  };

  return (
    <section id="search" className="relative z-10 -mt-32 scroll-mt-20 md:-mt-40">
      <div data-hero-card className="container-x">
        <div className="rounded-2xl bg-white p-4 shadow-2xl shadow-deep/30 sm:p-6">
          <div role="tablist" className="mb-5 flex gap-1 overflow-x-auto rounded-full bg-sky p-1">
            {tabs.map(([id, label]) => (
              <button
                key={id} role="tab" aria-selected={tab === id} onClick={() => switchTab(id)}
                className={`flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${tab === id ? 'bg-lagoon text-white shadow' : 'text-ink/70 hover:text-ink'}`}
              >{label}</button>
            ))}
          </div>

          <form key={tab} onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
            {tab === 'visa' && (<>
              <Field label="Destination" className="lg:col-span-2"><Select name="country" options={visaCountries} /></Field>
              <Field label="Visa type" className="lg:col-span-2"><Select name="type" options={visaTypes} /></Field>
            </>)}
            {tab === 'flights' && (<>
              <Field label="From"><Select name="from" options={cities} defaultValue="London" /></Field>
              <Field label="To"><Select name="to" options={cities} defaultValue="Dubai" /></Field>
              <Field label="Departure"><input required type="date" name="date" min={today()} className="field" /></Field>
              <Field label="Travellers"><input type="number" name="pax" min="1" max="9" defaultValue="1" className="field" /></Field>
            </>)}
            {tab === 'hotels' && (<>
              <Field label="City"><Select name="city" options={cities} defaultValue="Istanbul" /></Field>
              <Field label="Check-in"><input required type="date" name="in" min={today()} className="field" /></Field>
              <Field label="Check-out"><input required type="date" name="out" min={today()} className="field" /></Field>
              <Field label="Guests"><input type="number" name="guests" min="1" max="8" defaultValue="2" className="field" /></Field>
            </>)}
            {tab === 'cars' && (<>
              <Field label="Pickup city"><Select name="city" options={cities} defaultValue="Dubai" /></Field>
              <Field label="Pickup date"><input required type="date" name="date" min={today()} className="field" /></Field>
              <Field label="Rental days"><input type="number" name="days" min="1" max="30" defaultValue="3" className="field" /></Field>
              <Field label="Car type"><Select name="type" options={carTypes} /></Field>
            </>)}
            <button className="btn w-full sm:col-span-2 lg:col-span-1" type="submit">Search {tab === 'cars' ? 'cars' : tab}</button>
          </form>

          {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <ResultList results={results} />
        </div>
      </div>
    </section>
  );
}
