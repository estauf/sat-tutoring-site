export function Button({ asChild = false, className = "", size, variant, children, ...props }) {
  const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition border border-slate-300 hover:bg-slate-50";
  const sizes = {
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    secondary: "bg-white",
    default: "bg-slate-900 text-white border-slate-900 hover:bg-slate-800",
  };
  const cls = [base, variants[variant || "default"], size ? sizes[size] : "", className].join(" ");
  const Comp = asChild ? "span" : "button";
  return <Comp className={cls} {...props}>{children}</Comp>;
}
