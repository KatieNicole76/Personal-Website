export default function Button({ href, children, variant = "solid", className = "", target, rel }) {
  const base = "text-subtitle2 py-1 px-2 rounded-xl flex items-center justify-center text-center transition-colors duration-200";

  const variants = {
    solid: "bg-med-green text-light-gold hover:bg-dark-green",
    outline: "border-2 border-med-green text-light-gold hover:bg-dark-green hover:border-dark-green",
  };

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}