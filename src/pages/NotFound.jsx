import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <span className="font-display text-8xl text-brand/20">404</span>
      <h1 className="mt-4 font-display text-3xl text-ink">This page took a wrong turn.</h1>
      <p className="mt-3 max-w-sm text-sm text-ink-soft">
        The page you're looking for doesn't exist or may have moved. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-brand-dark"
      >
        Back to Home
      </Link>
    </section>
  );
}
