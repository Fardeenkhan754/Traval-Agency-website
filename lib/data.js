// Mock data + deterministic "search" functions. No network calls.
export const cities = [
  "London",
  "Dubai",
  "Istanbul",
  "Paris",
  "Tokyo",
  "Bangkok",
  "New York",
  "Singapore",
];
export const carTypes = ["Any", "Economy", "SUV", "Luxury", "Van"];

const hash = (s) =>
  [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const hh = (h) => `${String(h % 24).padStart(2, "0")}:00`;
const airlines = [
  "Emirates",
  "Turkish Airlines",
  "Qatar Airways",
  "Singapore Airlines",
  "British Airways",
];

export const destinations = [
  {
    city: "Istanbul",
    country: "Türkiye",
    from: 320,
<<<<<<< HEAD
    image: "/images/Istanbul.png",
=======
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
    bg: "from-[#F4B33E] to-[#C2542D]",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    from: 280,
<<<<<<< HEAD
    image: "/images/dubai.png",
=======
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
    bg: "from-[#0B5563] to-[#3FA7A3]",
  },
  {
    city: "Tokyo",
    country: "Japan",
    from: 740,
<<<<<<< HEAD
    image: "/images/tokyo.png",
=======
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
    bg: "from-[#2B2D6E] to-[#D8577A]",
  },
  {
    city: "Paris",
    country: "France",
    from: 410,
<<<<<<< HEAD
    image: "/images/paris.jpg",
=======
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
    bg: "from-[#1F3C5A] to-[#8DA7C4]",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    from: 520,
<<<<<<< HEAD
    image: "/images/bangkok.jpg",
=======
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
    bg: "from-[#2F6B3A] to-[#E7C34A]",
  },
  {
    city: "Singapore",
    country: "Singapore",
    from: 690,
<<<<<<< HEAD
    image: "/images/singapore.jpg",
=======
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
    bg: "from-[#08323B] to-[#59B6A7]",
  },
];

export const services = [
  {
    id: "visa",
    name: "Visa services",
    text: "Document checks, applications and appointment booking for tourist, business and transit visas.",
    tint: "bg-white",
  },
  {
    id: "flights",
    name: "Flight booking",
    text: "Compare fares across airlines and book one-way, return or multi-city trips.",
    tint: "bg-saffron/25",
  },
  {
    id: "hotels",
    name: "Hotel booking",
    text: "Hand-checked stays from boutique guesthouses to city towers, with free cancellation options.",
    tint: "bg-white",
  },
  {
    id: "cars",
    name: "Car rental",
    text: "Pick up at the airport or your hotel. Economy cars, SUVs, vans and chauffeured luxury.",
    tint: "bg-lagoon/10",
  },
];

export const stats = [
  { value: 48000, suffix: "+", label: "Trips planned" },
  { value: 92, suffix: "", label: "Countries covered" },
  { value: 97, suffix: "%", label: "Visa approval rate" },
  { value: 24, suffix: "/7", label: "Traveller support" },
];

export const testimonials = [
  {
    quote:
      "They got my Schengen visa appointment moved up by two weeks and booked the flights around it. I only had to show up.",
    name: "Amelia R.",
    role: "Product designer, Paris trip",
  },
  {
    quote:
      "The hotel was exactly as described and the airport car was waiting with my name on it.",
    name: "Daniel K.",
    role: "Consultant, Dubai",
  },
  {
    quote:
      "Booked a family of six on one itinerary, visas included. Zero stress.",
    name: "Priya S.",
    role: "Teacher, Tokyo",
  },
];

const visaData = {
  "United Kingdom": {
    Tourist: [115, 15],
    Business: [150, 20],
    Transit: [45, 10],
  },
  "Schengen Area": { Tourist: [90, 15], Business: [110, 20], Transit: [40, 7] },
  "United States": {
    Tourist: [185, 30],
    Business: [190, 35],
    Transit: [185, 20],
  },
  Türkiye: { Tourist: [60, 5], Business: [80, 7], Transit: [30, 3] },
  Japan: { Tourist: [30, 7], Business: [50, 10], Transit: [20, 5] },
  Thailand: { Tourist: [40, 5], Business: [70, 10], Transit: [25, 3] },
};
export const visaCountries = Object.keys(visaData);
export const visaTypes = ["Tourist", "Business", "Transit"];

export function searchVisa({ country, type }) {
  const [fee, days] = visaData[country][type];
  const docs = "Passport, photo, bank statement, itinerary";
  return [
    {
      id: "std",
      badge: "Standard",
      title: `${country} ${type.toLowerCase()} visa`,
      meta: [`${days} working days`, docs],
      price: fee + 25,
      note: "govt fee + $25 service",
    },
    {
      id: "exp",
      badge: "Express",
      title: `${country} ${type.toLowerCase()} visa`,
      meta: [`${Math.max(2, Math.ceil(days / 2))} working days`, docs],
      price: Math.round(fee * 1.5) + 45,
      note: "govt fee + $45 service",
    },
  ];
}

export function searchFlights({ from, to, date, pax }) {
  const h = hash(from + to);
  return [0, 1, 2].map((i) => {
    const dep = 5 + ((h + i * 5) % 15);
    const dur = 3 + ((h >> i) % 9);
    return {
      id: `f${i}`,
      badge: airlines[(h + i) % airlines.length],
      title: `${from} to ${to}`,
      meta: [
        `${hh(dep)} – ${hh(dep + dur)}`,
        `${dur}h ${((h * (i + 1)) % 6) * 10}m`,
        i === 0 ? "Non-stop" : `${i} stop`,
        date,
      ],
      price: (180 + ((h + i * 37) % 420)) * pax,
      note: `${pax} traveller${pax > 1 ? "s" : ""}`,
    };
  });
}

export function searchHotels({ city, nights, guests }) {
  const h = hash(city);
  const names = ["Grand Palace", "Harbour Suites", "Old Town Boutique"];
  return names.map((n, i) => ({
    id: `h${i}`,
    badge: `${5 - i} star`,
    title: `${city} ${n}`,
    meta: [
      `${(0.4 + i * 1.3).toFixed(1)} km from centre`,
      i === 2 ? "Breakfast included" : "Free cancellation",
      `${guests} guest${guests > 1 ? "s" : ""}`,
    ],
    price: (60 + ((h + i * 41) % 90) + (2 - i) * 55) * nights,
    note: `${nights} night${nights > 1 ? "s" : ""}`,
  }));
}

const fleet = [
  { name: "Toyota Yaris", type: "Economy", seats: 5, rate: 32 },
  { name: "Hyundai Elantra", type: "Economy", seats: 5, rate: 38 },
  { name: "Toyota RAV4", type: "SUV", seats: 5, rate: 62 },
  { name: "Nissan Patrol", type: "SUV", seats: 7, rate: 85 },
  { name: "Mercedes E-Class", type: "Luxury", seats: 5, rate: 130 },
  { name: "Toyota Hiace", type: "Van", seats: 12, rate: 95 },
];

export function searchCars({ city, days, type }) {
  return fleet
    .filter((c) => type === "Any" || c.type === type)
    .map((c, i) => ({
      id: `c${i}`,
      badge: c.type,
      title: c.name,
      meta: [`${c.seats} seats`, `Pickup: ${city}`, "Unlimited km"],
      price: c.rate * days,
      note: `${days} day${days > 1 ? "s" : ""} at $${c.rate}/day`,
    }));
}
