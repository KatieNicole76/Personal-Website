export default function ExperienceCard({ company, dates, role, bullets, variant = "dark", className = "" }) {
    const base = "torn-edge p-2";

    const variants = {
    dark: "bg-darker-green text-gold",
    light: "bg-gold text-black",
    };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      <div className="flex justify-between items-baseline">
        <h3 className="text-h3">{company}</h3>
        <span className="text-body2 opacity-70">{dates}</span>
      </div>
      <p className="text-body2 italic opacity-80">{role}</p>

      <ul className="text-body1">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex">
            <span className="opacity-60">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}