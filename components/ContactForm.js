"use client";
import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const err = {};
    if (f.name.trim().length < 2) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email))
      err.email = "Enter a valid email address.";
    if (f.message.trim().length < 10)
      err.message = "Tell us a little more (10+ characters).";
    setErrors(err);
    if (!Object.keys(err).length) setSent(true); // mock: no backend
  };

  const Err = ({ k }) =>
    errors[k] ? (
      <span role="alert" className="mt-1 block text-xs text-red-600">
        {errors[k]}
      </span>
    ) : null;

  return (
    <section id="contact" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div data-reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Tell us where you’re headed
          </h2>
          <p className="mt-4 max-w-md text-ink/70">
            A travel advisor replies within one working day with a plan and a
            price.
          </p>
          <p className="mt-8 text-sm text-ink/70">
            hello@airvanta.example
            <br />
<<<<<<< HEAD
            (+92) 123 456 7890
=======
            (+92) 123 1234431
>>>>>>> 145cf28c2be53c4439e31f53827512af2cb67412
          </p>
        </div>
        <div data-reveal>
          {sent ? (
            <p
              role="status"
              className="rounded-2xl bg-sky p-8 font-display text-2xl"
            >
              Message sent. We’ll be in touch within one working day.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="grid gap-4 sm:grid-cols-2"
            >
              <label>
                <span className="label">Name</span>
                <input name="name" className="field" />
                <Err k="name" />
              </label>
              <label>
                <span className="label">Email</span>
                <input name="email" type="email" className="field" />
                <Err k="email" />
              </label>
              <label className="sm:col-span-2">
                <span className="label">Service</span>
                <select name="service" className="field">
                  <option>Visa services</option>
                  <option>Flight booking</option>
                  <option>Hotel booking</option>
                  <option>Car rental</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="label">Message</span>
                <textarea name="message" rows="4" className="field" />
                <Err k="message" />
              </label>
              <button className="btn sm:col-span-2" type="submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
