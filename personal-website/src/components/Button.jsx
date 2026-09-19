export default function Button({ href, children, variant = "solid", className = "", target, rel }) {
  const base = "text-subtitle2 py-1 px-2 rounded-xl flex items-center justify-center text-center transition-all duration-300";

  const variants = {
    solid: "bg-med-green text-light-gold hover:brightness-110 hover:shadow-[0_0_14px_2px_var(--color-glow)]",
    outline: "border-2 border-med-green text-light-gold hover:border-light-gold hover:shadow-[0_0_14px_2px_var(--color-glow)]",
  };

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}