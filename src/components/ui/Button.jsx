import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-brand text-ivory hover:bg-brand-dark shadow-[0_10px_30px_-12px_rgba(31,92,79,0.55)]",
  gold: "bg-gold text-ink hover:bg-gold-light shadow-[0_10px_30px_-12px_rgba(200,155,92,0.6)]",
  outline:
    "border border-ink/20 text-ink hover:border-brand hover:text-brand bg-transparent",
  ghost: "text-ink hover:text-brand bg-transparent",
};

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  arrow = true,
  className = "",
  children,
}) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
