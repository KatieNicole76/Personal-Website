export default function Button({ href, children, variant = "solid", className = "", target, rel }) {
  const base = "text-body2 py-1 px-2 rounded-xl inline-block text-center";

  const variants = {
    solid: "bg-med-green text-light-gold",
    outline: "border border-gold text-gold",
  };

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}