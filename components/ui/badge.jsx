export function Badge({ className = "", variant = "default", children }) {
  const variants = {
    default: "bg-slate-900 text-white",
    secondary: "bg-slate-100 text-slate-700 border border-slate-200",
  };
  return (
    <span className={["px-2.5 py-1 text-xs rounded-md", variants[variant] || variants.default, className].join(" ")}>
      {children}
    </span>
  );
}
